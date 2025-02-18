import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layout/MainLayout";
import NotePage from "./pages/NotePage";
import NoteDetail from "./pages/NoteDetail";
import EditNotes from "./pages/EditNote";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="notes" element={<NotePage />} />
                    <Route path="notes/:id" element={<NoteDetail />} />
                    <Route path="edit/:id" element={<EditNotes />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
