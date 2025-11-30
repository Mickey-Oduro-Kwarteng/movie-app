import MovieCard from "../components/moviecard";

function Home() {
  const movies = [
    { Id: 1, title: "John wick", release_date: "2020" },
    { Id: 2, title: "Terminator", release_date: "2020" },
    { Id: 3, title: "Black clover", release_date: "2020" },
    { Id: 4, title: "coach carter", release_date: "2020" },
  ];
  const handleSearch = () => {};

  return (
    <div classname="home">
      <form onSubmit={handleSearch} classname="Search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
        />
      </form>
      <div className="movies-grid">
        {movies.map((movies) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
