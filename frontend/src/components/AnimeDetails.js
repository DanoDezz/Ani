const AnimeDetails = ({ details }) => {
  return (
    <div className="mt-8 bg-gray-800 p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-2">{details.title}</h2>
      <img src={details.image} alt={details.title} className="rounded mb-2" />
      <p>{details.description}</p>
    </div>
  );
};

export default AnimeDetails;
