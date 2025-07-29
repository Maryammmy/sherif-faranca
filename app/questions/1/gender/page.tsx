import SelectGender from "@/components/questions/1/gender/SelectGender";
import Shared from "@/components/questions/Shared";

function Gender() {
  return (
    <Shared
      progresses={[37.5, 0, 0]}
      title="What's your"
      coloredTitle="gender ?"
      description="This data will help us tailor your workout to match your body shape and daily work"
      content={<SelectGender />}
      backHref="/questions/1/intro"
      nextHref="/questions/1/foucs-area"
    />
  );
}

export default Gender;
