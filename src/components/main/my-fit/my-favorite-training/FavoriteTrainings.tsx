import FavoriteTrainingCard from "./Card";

function FavoriteTrainings() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {Array.from({ length: 4 }).map((_, index) => (
        <FavoriteTrainingCard key={index} />
      ))}
    </div>
  );
}

export default FavoriteTrainings;
