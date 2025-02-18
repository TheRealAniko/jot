import notes from "../data/data";
import NoteCard from "../components/NoteCard";

function NoteList() {
    return (
        <>
            {notes.map((note) => (
                <NoteCard key={note.id} {...note} />
            ))}
        </>
    );
}

export default NoteList;
