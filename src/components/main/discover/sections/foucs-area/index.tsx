import Area from "./Area";
import { IFoucsArea } from "@/src/interfaces/main/discover";

interface IProps {
  foucsAreas: IFoucsArea[];
}
function FoucsAreas({ foucsAreas }: IProps) {
  return (
    <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {foucsAreas?.map((area) => (
        <Area key={area?.id} area={area} />
      ))}
    </div>
  );
}

export default FoucsAreas;
