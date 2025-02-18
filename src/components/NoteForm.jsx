import { useState } from "react";
import { Save, Trash2, Ban } from "lucide-react";
import { useNavigate } from "react-router";

const NoteForm = ({ initialData = {}, onSubmit, onDelete }) => {
    const navigate = useNavigate();

    const [title, setTitle] = useState(initialData.title || "");
    const [content, setContent] = useState(initialData.content || "");
    const [category, setCategory] = useState(initialData.category || "work");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content) return;

        const newNote = {
            id: initialData.id || Date.now(),
            title,
            content,
            category,
            createdAt: initialData.createdAt || new Date().toISOString(),
        };
        onSubmit(newNote);
    };

    return (
        <div className="w-full">
            <h2 className="text-lg font-bold mb-2">
                {initialData.id ? "Edit Note" : "New Note"}
            </h2>
            <form onSubmit={handleSubmit}>
                <label className="block mb-2 text-sm">Title</label>
                <input
                    type="text"
                    className="input-custom border-border w-full mb-3"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label className="block mb-2 text-sm">Content</label>
                <textarea
                    className="textarea-custom border-border w-full mb-3"
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

                {/* Icon-Leiste unten */}
                <div className="flex justify-end space-x-4 mt-6">
                    <button
                        type="submit"
                        title="Save"
                        className="text-gray-400 hover:text-green-500">
                        <Save className="w-6 h-6" />
                    </button>
                    <button
                        type="button"
                        title="Cancel"
                        onClick={() => navigate(-1)}
                        className="text-gray-400 hover:text-yellow-500">
                        <Ban className="w-6 h-6" />
                    </button>
                    {initialData.id && (
                        <button
                            type="button"
                            title="Delete"
                            onClick={onDelete}
                            className="text-gray-400 hover:text-red-500">
                            <Trash2 className="w-6 h-6" />
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default NoteForm;
