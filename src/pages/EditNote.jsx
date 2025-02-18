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

            <div className="w-full bg-background rounded-lg border border-border overflow-hidden p-6">
                <NoteForm initialData={note} />
            </div>
        </div>
    );
};

export default EditNote;
