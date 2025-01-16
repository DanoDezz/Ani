const AnimeList = ({ results, setDetails }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {results.map((anime) => (
        <div
          key={anime.id}
          className="bg-gray-800 p-4 rounded shadow"
          onClick={() => setDetails(anime)}
        >
          <img src={anime.image} alt={anime.title} className="rounded mb-2" />
          <h2 className="text-lg font-semibold">{anime.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default AnimeList;
