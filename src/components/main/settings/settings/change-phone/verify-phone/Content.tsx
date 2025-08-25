import { ChangePhone } from "@/src/schemas/main/settings/change-phone";

interface IProps {
  newPhone: ChangePhone;
}
function Content({ newPhone }: IProps) {
  const { countryCode, phoneNumber } = newPhone;
  return (
    <p className="font-medium text-secondary text-center">
      We are sending a verification code to your phone number:{" "}
      <span className="text-primary">{`+${countryCode}${phoneNumber}`}</span>{" "}
      Please check your phone number
    </p>
  );
}

export default Content;
