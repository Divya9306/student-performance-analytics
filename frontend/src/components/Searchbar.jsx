function SearchBar({ search, setSearch }) {
    return (
        <div className="mb-6 flex justify-between items-center">

            <input
                type="text"
                placeholder="🔍 Search students by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full md:w-96 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

        </div>
    );
}

export default SearchBar;