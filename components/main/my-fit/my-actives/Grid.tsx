import Achievement from "./achievement";
import Duration from "./Duration";
import HeartPulse from "./HeartPulse";

function Grid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
      <Achievement />
      <div className="flex flex-col gap-5">
        <HeartPulse />
        <Duration />
      </div>
    </div>
  );
}

export default Grid;
