import { Link } from "@/src/i18n/navigation";
import Title from "../Title";

function FavoriteTrainingHeader() {
  return (
    <div className="flex items-center justify-between">
      <Title title="My favorite training" />
      <Link
        href="/my-favorite-training"
        className="border-b border-secondary text-secondary font-medium"
      >
        <span>View All</span>
      </Link>
    </div>
  );
}

export default FavoriteTrainingHeader;
