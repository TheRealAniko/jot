import { useParams, Link, useNavigate } from "react-router";
import { Pencil, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { useNotes } from "../context/context";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const NoteDetail = () => {
    const { notes, delNote } = useNotes();
    const { id } = useParams();
    const navigate = useNavigate();
    const note = notes.find((n) => n.id.toString() === id);

    const handleDelete = (noteId) => {
        delNote(noteId);
        navigate("/");
    };
    const index = notes.findIndex((n) => n.id.toString() === id);

    const handlePrev = () => {
        if (index > 0) navigate(`/notes/${notes[index - 1].id}`);
    };

    const handleNext = () => {
        if (index < notes.length - 1) navigate(`/notes/${notes[index + 1].id}`);
    };

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
            <div className="text-sm text-gray-400 ">
                <Link to="/" className="hover:underline">
                    Home
                </Link>{" "}
                / <span className="text-text">{note.title}</span>
            </div>
            <div className="text-sm text-gray-400 my-5 flex justify-between ">
                <ChevronLeft
                    onClick={handlePrev}
                    className="w-7 h-7 text-text"
                />
                <ChevronRight
                    onClick={handleNext}
                    className="w-7 h-7 text-text"
                />
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
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            className="text-text leading-relaxed tracking-wide mb-6 markdown">
                            {note.content}
                        </ReactMarkdown>
                        <div className="text-xs text-border">
                            Created:{" "}
                            {new Date(note.createdAt).toLocaleDateString()}
                        </div>
                    </div>
                </div>
                <div className="flex justify-end space-x-4 mt-6 border-t border-border p-2">
                    <Link
                        to={`/edit/${id}`}
                        title="Edit Note"
                        className="p-2 rounded-lg hover:bg-primary/80 transition-colors duration-200">
                        <Pencil className="w-5 h-5 text-text" />
                    </Link>
                    <button
                        type="button"
                        title="Delete"
                        onClick={() => handleDelete(note.id)}
                        className="p-2 rounded-lg hover:bg-red-500 transition-colors duration-200">
                        <Trash2 className="w-5 h-5 text-text" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoteDetail;
