import { Button } from "@/src/components/ui/Button";
import PopularTrainings from "./PopularTrainings";
import { ISuggestedVideo } from "@/src/interfaces/main/discover";

interface IProps {
  suggestions: ISuggestedVideo[];
}
function PopularTraining({ suggestions }: IProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-700 text-lg font-semibold capitalize">
          Popular Training
        </h2>
        <Button className="border-b border-secondary text-secondary font-medium">
          <span>View All</span>
        </Button>
      </div>
      <PopularTrainings suggestions={suggestions} />
    </div>
  );
}

export default PopularTraining;
