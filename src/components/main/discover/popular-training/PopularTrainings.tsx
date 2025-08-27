import PopularTrainingCard from "./Card";

function PopularTrainings() {
  return (
    <div className="grid gap-5 py-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <PopularTrainingCard key={index} />
      ))}
    </div>
  );
}

export default PopularTrainings;
