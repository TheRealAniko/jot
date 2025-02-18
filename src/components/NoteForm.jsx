import { useState } from "react";

const NoteForm = ({ initialData = {} }) => {
    const [title, setTitle] = useState(initialData.title || "");
    const [content, setContent] = useState(initialData.content || "");
    const [category, setCategory] = useState(initialData.category || "work");

    return (
        <div className="w-full">
            <h2 className="text-lg font-bold mb-2">
                {initialData.id ? "Edit Note" : "New Note"}
            </h2>

            <label className="block mb-2 text-sm">Title</label>
            <input
                type="text"
                className="input-custom border-border w-full mb-3"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label className="block mb-2 text-sm">Content</label>
            <textarea
                className="textarea-custom  border-border w-full mb-3"
                rows="4"
                value={content}
                onChange={(e) => setContent(e.target.value)}></textarea>

            <label className="block mb-2 text-sm">Category</label>
            <select
                className="select border-border bg-background w-full mb-3"
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="health">Health</option>
                <option value="ideas">Ideas</option>
                <option value="learning">Learning</option>
            </select>

            <div className="flex justify-end space-x-2"></div>
        </div>
    );
};

export default NoteForm;
