import NoteList from "../components/NoteList";
import FilterComponent from "../components/FilterComponent";

function HomePage() {
    return (
        <div className="container mx-auto px-4 py-10">
            <FilterComponent />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <NoteList />
            </div>
        </div>
    );
}

export default HomePage;
