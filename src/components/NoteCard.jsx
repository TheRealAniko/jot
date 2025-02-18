import { Eye } from "lucide-react";
import { Link } from "react-router";

const NoteCard = ({ title, createdAt, category, id }) => {
    const categoryColors = {
        work: "bg-categories-work",
        personal: "bg-categories-personal",
        health: "bg-categories-health",
        ideas: "bg-categories-ideas",
        learning: "bg-categories-learning",
    };

    return (
        <div className="card bg-background rounded-lg border border-border overflow-hidden">
            <div
                className={`px-4 py-1  text-text ${
                    categoryColors[category] || "bg-gray-500"
                }`}>
                {category}
            </div>
            <div className="card-body">
                <div className="flex items-center justify-between pb-2">
                    <h2 className="text-lg font-semibold truncate w-full pr-4">
                        {title}
                    </h2>
                    <Link key={id} to={`notes/${id}`}>
                        <button className="text-text hover:text-primary">
                            <Eye className="w-5 h-5" />
                        </button>
                    </Link>
                </div>
                <div className="text-xs text-border">
                    Created: {new Date(createdAt).toLocaleDateString()}
                </div>
            </div>
        </div>
    );
};

export default NoteCard;
