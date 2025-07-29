import SelectArea from "@/components/questions/1/foucs-area/SelectArea";
import Shared from "@/components/questions/Shared";

function FoucsArea() {
  return (
    <Shared
      progresses={[25, 0, 0]}
      title="What's your"
      coloredTitle="Focus area ?"
      content={<SelectArea />}
      backHref="/questions/1/gender"
      nextHref="/questions/1/height"
    />
  );
}

export default FoucsArea;
