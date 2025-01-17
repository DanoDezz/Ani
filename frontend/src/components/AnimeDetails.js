import React, { useEffect, useState } from 'react';
import { fetchAnimeDetails } from '../api';
import { useParams } from 'react-router-dom';

const AnimeDetails = () => {
  const { id } = useParams();
  const [animeDetails, setAnimeDetails] = useState(null);

  useEffect(() => {
    const getAnimeDetails = async () => {
      try {
        const details = await fetchAnimeDetails(id);
        setAnimeDetails(details);
      } catch (error) {
        console.error('Error fetching anime details:', error);
      }
    };

    getAnimeDetails();
  }, [id]);

  if (!animeDetails) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl">{animeDetails.title}</h1>
      <p>{animeDetails.description}</p>
      <img src={animeDetails.image} alt={animeDetails.title} className="w-64" />
    </div>
  );
};

export default AnimeDetails;
