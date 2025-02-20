import { useState, useEffect } from "react";
import { NoteContext } from "./context";

const NoteContextProvider = ({ children }) => {
    // 🔄 Notes immer aus localStorage laden, wenn Component lädt
    const [notes, setNotes] = useState(() => {
        return JSON.parse(localStorage.getItem("notes")) || [];
    });

    // 🔥 Neuen Eintrag hinzufügen & sofort in localStorage speichern
    const addNote = (newNote) => {
        setNotes((prevNotes) => {
            const updatedNotes = [newNote, ...prevNotes];
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
            return updatedNotes;
        });
    };
    const updateNote = (updatedNote) => {
        setNotes((prevNotes) => {
            const updatedNotes = prevNotes.map((note) =>
                note.id === updatedNote.id ? updatedNote : note
            );
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
            return updatedNotes;
        });
    };

    const delNote = (id) => {
        setNotes((prevNotes) => {
            const updatedNotes = prevNotes.filter((note) => note.id !== id);
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
            return updatedNotes;
        });
    };

    const [filter, setFilter] = useState("all");

    // ⚡ LocalStorage bei jeder Änderung von notes automatisch aktualisieren
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    return (
        <NoteContext.Provider
            value={{
                notes,
                setNotes,
                addNote,
                updateNote,
                delNote,
                filter,
                setFilter,
            }}>
            {children}
        </NoteContext.Provider>
    );
};

export default NoteContextProvider;
