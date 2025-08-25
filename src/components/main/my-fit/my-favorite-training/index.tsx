import Title from "../Title";
import FavoriteTrainings from "./FavoriteTrainings";

function FavoriteTraining() {
  return (
    <div className="flex flex-col gap-5">
      <Title title="My favorite training" />
      <FavoriteTrainings />
    </div>
  );
}

export default FavoriteTraining;
