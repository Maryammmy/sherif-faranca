import { areas } from "@/data/program/video-player";
import Area from "./Area";

function Areas() {
  return (
    <div className="flex flex-wrap gap-4">
      {areas.map((area, i) => (
        <Area key={i} area={area} />
      ))}
    </div>
  );
}

export default Areas;
