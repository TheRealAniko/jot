import NoteList from "../components/NoteList";

function HomePage() {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4">All Notes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <NoteList />
            </div>
        </div>
    );
}

export default HomePage;
