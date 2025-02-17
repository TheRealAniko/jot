import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layout/MainLayout";
import NotePage from "./pages/NotePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="notes" element={<NotePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
