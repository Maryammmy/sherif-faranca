import Title from "../Title";
import Grid from "./Grid";

function MyActives() {
  return (
    <div className="flex flex-col gap-5">
      <Title title="My actives" />
      <Grid />
    </div>
  );
}

export default MyActives;
