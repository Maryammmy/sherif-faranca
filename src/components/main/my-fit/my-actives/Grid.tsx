import Achievement from "./achievement";
import Habits from "./habits";

// import HeartPulse from "./HeartPulse";

function Grid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
      <Achievement />
      <Habits />
    </div>
  );
}

export default Grid;
