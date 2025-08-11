import SelectHeight from "./SelectHeight";
import Shared from "@/components/questions/Shared";

function Height() {
  return (
    <Shared
      progresses={[37.5, 0, 0]}
      title="What's is your"
      coloredTitle="height ?"
      description="This data will help us tailor your workout to match your body shape and daily work"
      content={<SelectHeight />}
      backHref="/questions/1/foucs-area"
      nextHref="/questions/1/weight"
    />
  );
}

export default Height;
