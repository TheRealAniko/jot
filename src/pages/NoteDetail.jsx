import { useParams, Link } from "react-router";
import { Pencil, Trash2 } from "lucide-react";
import notes from "../data/data";

const NoteDetail = () => {
    const { id } = useParams();
    const note = notes.find((n) => n.id.toString() === id);
    const categoryColors = {
        work: "bg-categories-work",
        personal: "bg-categories-personal",
        health: "bg-categories-health",
        ideas: "bg-categories-ideas",
        learning: "bg-categories-learning",
    };
    if (!note)
        return <p className="text-center text-gray-400">Note not found</p>;

    return (
        <div className="max-w-4xl mx-auto py-10">
            {/* Breadcrumbs über der Notiz */}
            <div className="text-sm text-gray-400 mb-10">
                <Link to="/" className="hover:underline">
                    Home
                </Link>{" "}
                / <span className="text-text">{note.title}</span>
            </div>
            {/* Sidebar für Icons (links neben der Notiz) */}
            <div className="flex space-x-4">
                <div className="flex flex-col space-y-4 w-10 shrink-0">
                    <Link
                        to={`/edit/${id}`}
                        className="text-gray-400 hover:text-primary">
                        <button className="text-gray-400 hover:text-primary">
                            <Pencil className="w-5 h-5" />
                        </button>
                    </Link>
                    <button className="text-gray-400 hover:text-red-500">
                        <Trash2 className="w-5 h-5" />
                    </button>
                </div>

                <div className=" bg-background rounded-lg border border-border overflow-hidden">
                    <div
                        className={`px-4 py-1  text-text ${
                            categoryColors[note.category] || "bg-gray-500"
                        }`}>
                        {note.category}
                    </div>
                    <div className="card-body">
                        <div className="">
                            <h2 className="text-lg font-semibold  w-full pr-4 mb-4">
                                {note.title}
                            </h2>
                            <p className="font-light leading-relaxed tracking-wide mb-6">
                                {note.content}
                            </p>
                            <div className="text-xs text-border">
                                Created:{" "}
                                {new Date(note.createdAt).toLocaleDateString()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoteDetail;
