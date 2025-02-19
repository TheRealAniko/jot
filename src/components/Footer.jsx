import { Grip, Github, Banana, Dribbble } from "lucide-react";

function Footer() {
    return (
        <footer className="footer bg-background text-text p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Logo & Copyright */}
                <div className="flex items-center space-x-3">
                    <Grip />
                    <p className="text-center md:text-left">
                        © {new Date().getFullYear()} - All right reserved
                    </p>
                </div>

                {/* Slogan */}
                <div className="text-center">
                    <p>Jot... Empty your brain cache. No data loss.</p>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-4 items-center">
                    <Github className="h-5 w-5 hover:text-primary transition" />
                    <Banana className="h-5 w-5 hover:text-yellow-500 transition" />
                    <Dribbble className="h-5 w-5 hover:text-pink-500 transition" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
