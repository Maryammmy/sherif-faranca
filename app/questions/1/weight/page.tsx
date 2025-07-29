import SelectWeight from "@/components/questions/1/weight/SelectWeight";
import Shared from "@/components/questions/Shared";

function Weight() {
  return (
    <Shared
      progresses={[50, 0, 0]}
      title="What's is your"
      coloredTitle="weight ?"
      description="This data will help us tailor your workout to match your body shape and daily work"
      content={<SelectWeight />}
      backHref="/questions/1/height"
      nextHref="/questions/1/bmi"
    />
  );
}

export default Weight;
