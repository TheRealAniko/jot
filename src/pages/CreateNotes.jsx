import { Link, useNavigate } from "react-router";
import NoteForm from "../components/NoteForm";
import { useNotes } from "../context/context";

const CreateNotes = () => {
    const { addNote } = useNotes();
    const navigate = useNavigate();

    const handleSave = (newNote) => {
        addNote(newNote); // Speichert Notiz in localStorage & Context
        navigate("/"); // Navigiert nach dem Speichern zurück zur Startseite
    };

    return (
        <div className="max-w-4xl mx-auto py-10">
            <div className="text-sm text-gray-400 mb-10">
                <Link to="/" className="hover:underline">
                    Home
                </Link>{" "}
                / <span className="text-text">New Note</span>
            </div>

            <div className="w-full bg-background rounded-lg border border-border overflow-hidden p-6">
                <NoteForm onSubmit={handleSave} />
            </div>
        </div>
    );
};

export default CreateNotes;
