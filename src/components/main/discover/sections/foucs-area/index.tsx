import { foucsAreas } from "@/src/data/main/discover";
import Area from "./Area";

function FoucsAreas() {
  return (
    <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {foucsAreas.map((area, index) => (
        <Area key={index} area={area} />
      ))}
    </div>
  );
}

export default FoucsAreas;
