import NoteCard from "../components/NoteCard";
import { useNotes } from "../context/context";

function NoteList() {
    const { notes, filter } = useNotes();

    const filteredNotes =
        filter === "all"
            ? notes
            : notes.filter((note) => note.category === filter);

    return (
        <>
            {filteredNotes.map((note) => (
                <NoteCard key={note.id} {...note} />
            ))}
        </>
    );
}

export default NoteList;
