import SelectShape from "@/components/questions/1/shape/SelectShape";
import Shared from "@/components/questions/Shared";

function Shape() {
  return (
    <Shared
      progresses={[100, 0, 0]}
      title="What's your Current"
      coloredTitle="body Shape ?"
      content={<SelectShape />}
      backHref="/questions/1/keep-fit"
      nextHref="/questions/1/fitness-goals"
    />
  );
}

export default Shape;
