import { Home, NotebookPen, User } from "lucide-react";
import { Link, NavLink } from "react-router";

function Navbar() {
    return (
        <div className="navbar bg-background text-text">
            <div className="container mx-auto px-4">
                <div className="flex-1">
                    <Link className="btn btn-ghost text-xl" to="/">
                        Jot...
                    </Link>
                </div>
                <div>
                    <ul className="menu menu-horizontal rounded-box">
                        <li>
                            <NavLink to="/">
                                <Home className="h-5 w-5" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/new-notes">
                                <NotebookPen className="h-5 w-5" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/user">
                                <User className="h-5 w-5" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
