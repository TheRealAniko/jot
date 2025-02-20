import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

function MainLayout() {
    return (
        <div className="bg-dotted min-h-screen flex flex-col">
            <header className="sticky top-0 z-50">
                <Navbar />
            </header>
            <main className="flex-grow container  mx-auto px-4 py-5 text-text ">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default MainLayout;
