import React, { useState } from 'react';
import { searchAnime } from '../api';

const AnimeList = () => {
  const [animeList, setAnimeList] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const results = await searchAnime(query);
      setAnimeList(results);
    } catch (error) {
      console.error('Error fetching anime list:', error);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for anime..."
        className="p-2 border rounded"
      />
      <button onClick={handleSearch} className="p-2 ml-2 bg-blue-500 text-white rounded">
        Search
      </button>
      <div className="mt-4">
        {animeList.map((anime) => (
          <div key={anime.id} className="p-2 border-b">
            <h2 className="text-xl">{anime.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
