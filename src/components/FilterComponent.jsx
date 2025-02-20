import { useNotes } from "../context/context";

const FilterComponent = () => {
    const { setFilter, filter, notes } = useNotes();

    const setFilterInView = (filter) => {
        setFilter(filter);
    };
    const uniqueCategories = [...new Set(notes.map((note) => note.category))];
    const categoryColors = {
        work: "bg-categories-work",
        personal: "bg-categories-personal",
        health: "bg-categories-health",
        ideas: "bg-categories-ideas",
        learning: "bg-categories-learning",
    };

    return (
        <div className="mb-4 flex flex-wrap gap-3">
            <button
                onClick={() => setFilterInView("all")}
                className={`bg-background px-5  rounded-xl ${
                    filter === "all" ? "border-solid border-2 border-text" : ""
                }`}>
                All
            </button>
            {uniqueCategories.map((category) => (
                <button
                    key={category}
                    onClick={() => setFilterInView(category)}
                    className={`px-5  rounded-xl ${
                        categoryColors[category] || "bg-gray-500"
                    } ${filter === category ? "border-2 border-text" : ""}`}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default FilterComponent;
