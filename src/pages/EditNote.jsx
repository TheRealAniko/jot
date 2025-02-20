import { useParams, Link, useNavigate } from "react-router";
import NoteForm from "../components/NoteForm";
import { useNotes } from "../context/context";

const EditNote = () => {
    const { id } = useParams();
    const { notes, updateNote, delNote } = useNotes();
    const navigate = useNavigate();

    const noteToEdit = notes.find((n) => n.id.toString() === id);

    const handleSave = (updatedNote) => {
        updateNote(updatedNote);
        navigate(-1);
    };

    const handleDelete = (noteId) => {
        delNote(noteId);
        navigate("/");
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
        </div>
    );
};

export default EditNote;
