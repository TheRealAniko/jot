import { useParams, Link, useNavigate } from "react-router";
import notes from "../data/data";
import { Save, Trash2, Ban } from "lucide-react";
import NoteForm from "../components/NoteForm";

const EditNote = () => {
    const { id } = useParams();
    const note = notes.find((n) => n.id.toString() === id);
    const navigate = useNavigate();

    if (!note)
        return <p className="text-center text-gray-400">Note not found</p>;

    return (
        <div className="max-w-4xl mx-auto py-10">
            <div className="text-sm text-gray-400 mb-10">
                <Link to="/" className="hover:underline">
                    Home
                </Link>{" "}
                / <span className="text-text">Edit: {note.title}</span>
            </div>

            {/* Sidebar für Icons (links neben der Notiz) */}
            <div className="flex space-x-4">
                <div className="flex flex-col space-y-4 w-10 shrink-0">
                    <button className="text-gray-400 hover:text-primary">
                        <Save className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => navigate(-1)}
                        className="text-gray-400 hover:text-primary">
                        <Ban className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-red-500">
                        <Trash2 className="w-5 h-5" />
                    </button>
                </div>

                <div className="w-full bg-background rounded-lg border border-border overflow-hidden p-6">
                    <NoteForm initialData={note} />
                </div>
            </div>
        </div>
    );
};

export default EditNote;
