import { ISuggestedVideo } from "@/src/interfaces/main/discover";
import PopularTrainingCard from "./Card";

interface IProps {
  suggestions: ISuggestedVideo[];
}
function PopularTrainings({ suggestions }: IProps) {
  return (
    <div className="grid gap-5 py-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {suggestions?.map((video) => (
        <PopularTrainingCard key={video?.id} video={video} />
      ))}
    </div>
  );
}

export default PopularTrainings;
