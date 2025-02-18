import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layout/MainLayout";
import CreateNotes from "./pages/CreateNotes";
import NoteDetail from "./pages/NoteDetail";
import EditNotes from "./pages/EditNote";
import NoteContextProvider from "./context/NoteContextProvider";

function App() {
    return (
        <NoteContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="new-notes" element={<CreateNotes />} />
                        <Route path="notes/:id" element={<NoteDetail />} />
                        <Route path="edit/:id" element={<EditNotes />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </NoteContextProvider>
    );
}

export default App;
