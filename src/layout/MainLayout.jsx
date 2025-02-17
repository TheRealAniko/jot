import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

function MainLayout() {
    return (
        <div className="bg-dotted min-h-screen">
            <header>
                <Navbar />
            </header>
            <main className="container mx-auto px-4 text-text">
                <Outlet />
            </main>
            <footer>{/* <Footer /> */}</footer>
        </div>
    );
}

export default MainLayout;
