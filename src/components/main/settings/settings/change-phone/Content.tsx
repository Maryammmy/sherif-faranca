import { SkeletonCard } from "@/src/components/skeleton/Card";
import { usePhone } from "@/src/hooks";
import { ChangePhone } from "@/src/schemas/main/settings/change-phone";
import { Phone } from "lucide-react";

function Content() {
  const { data } = usePhone();
  console.log(data);
  if (!data)
    return (
      <div className="flex flex-col items-center gap-1 border-b pb-5">
        <SkeletonCard count={1} className="h-8 w-40" />
      </div>
    );
  const { countryCode, phoneNumber }: ChangePhone = data?.data;
  return (
    <div className="flex flex-col items-center gap-1 border-b pb-5">
      <div className="w-14 h-14 rounded-full flex justify-center items-center bg-primary">
        <Phone className="text-white" />
      </div>
      <span className="text-secondary font-medium">Current phone number</span>
      <div>
        <p className="text-gray-600 font-medium leading-none">
          {`+${countryCode}${phoneNumber}`}
        </p>
      </div>
    </div>
  );
}

export default Content;
