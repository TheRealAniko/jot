import { useState } from "react";
import { NoteContext } from "./context";

const NoteContextProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);

    const addNote = (newNote) => {
        setNotes((prevNotes) => {
            const updatedNotes = [newNote, ...prevNotes];
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
            return updatedNotes;
        });
    };

    const [myNotes, setMyNotes] = useState(
        JSON.parse(localStorage.getItem("notes")) || []
    );

    return (
        <NoteContext.Provider
            value={{ notes, setNotes, addNote, myNotes, setMyNotes }}>
            {children}
        </NoteContext.Provider>
    );
};

export default NoteContextProvider;
