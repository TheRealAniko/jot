import NoteCard from "../components/NoteCard";
import { useNotes } from "../context/context";

function NoteList() {
    const { notes } = useNotes();

    return (
        <>
            {notes.map((note) => (
                <NoteCard key={note.id} {...note} />
            ))}
        </>
    );
}

export default NoteList;
