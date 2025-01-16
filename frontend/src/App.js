import React, { useState } from 'react';
import axios from 'axios';
import AnimeList from './components/AnimeList';
import AnimeDetails from './components/AnimeDetails';

const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [details, setDetails] = useState(null);

  const searchAnime = async () => {
    const response = await axios.get(
      `https://anime-nine-omega.vercel.app/api/search/${query}`
    );
    setResults(response.data.results);
    setDetails(null);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Anime Streaming</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search anime..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-2 rounded-l bg-gray-800 border border-gray-700"
          />
          <button
            onClick={searchAnime}
            className="p-2 bg-blue-600 hover:bg-blue-500 rounded-r"
          >
            Search
          </button>
        </div>
        <AnimeList results={results} setDetails={setDetails} />
        {details && <AnimeDetails details={details} />}
      </div>
    </div>
  );
};

export default App;
