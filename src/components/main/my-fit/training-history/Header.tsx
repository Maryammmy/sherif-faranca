import { Link } from "@/src/i18n/navigation";
import Title from "../Title";

function TrainingHistoryHeader() {
  return (
    <div className="flex items-center justify-between">
      <Title title="Training history" />
      <Link
        href="/training-history?time=today"
        className="border-b border-secondary text-secondary font-medium"
      >
        <span>View All</span>
      </Link>
    </div>
  );
}

export default TrainingHistoryHeader;
