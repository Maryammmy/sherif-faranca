import Durations from "./Durations";
import FoucsAreas from "./foucs-area";
import Goals from "./Goals";

function Sections() {
  return (
    <div className="py-5 space-y-5">
      <FoucsAreas />
      <Goals />
      <Durations />
    </div>
  );
}

export default Sections;
