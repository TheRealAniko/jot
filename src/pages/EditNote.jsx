import { useParams, Link, useNavigate } from "react-router";
import NoteForm from "../components/NoteForm";
import { useNotes } from "../context/context";
import { ToastContainer, toast } from "react-toastify";

const EditNote = () => {
    const { id } = useParams();
    const { notes, updateNote, delNote } = useNotes();
    const navigate = useNavigate();

    const noteToEdit = notes.find((n) => n.id.toString() === id);

    const handleSave = (updatedNote) => {
        updateNote(updatedNote);
        toast.success("Changes saved successfully! 🎉");
        setTimeout(() => {
            navigate("/"); // Nach dem Toast zur Startseite navigieren
        }, 1500);
    };

    const handleDelete = (noteId) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this note? 🗑️"
        );
        if (confirmed) {
            delNote(noteId);
            toast.success("Poof! Note deleted. 🪄✨");
            setTimeout(() => navigate("/"), 1500);
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-10">
            <div className="text-sm text-gray-400 mb-10">
                <Link to="/" className="hover:underline">
                    Home
                </Link>{" "}
                / <span className="text-text">Edit: {notes.title}</span>
            </div>

            <div className="w-full bg-background rounded-lg border border-border overflow-hidden p-6">
                <NoteForm
                    initialData={noteToEdit}
                    onSubmit={handleSave}
                    onDelete={handleDelete}
                />
            </div>
            <ToastContainer theme="dark" />
        </div>
    );
};

export default EditNote;
