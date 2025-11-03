import Loader from "@/src/components/loader/Loader";
import { Button } from "@/src/components/ui/Button";
import { ChangePhone } from "@/src/schemas/main/settings/change-phone";
import { sendChangePhoneAPI } from "@/src/services/mutations/users";
import { useTranslations } from "next-intl";
import { useState } from "react";
import toast from "react-hot-toast";

interface IProps {
  newPhone: ChangePhone;
  resetTimer: () => void;
}
function ResendOtp({ newPhone, resetTimer }: IProps) {
  const t = useTranslations("otp");
  const [loading, setLoading] = useState(false);
  const resendOtp = async () => {
    setLoading(true);
    const response = await sendChangePhoneAPI(newPhone);
    if (response?.success) {
      toast.success(response?.message);
      resetTimer();
    } else {
      toast.error(response?.message);
    }
    setLoading(false);
  };
  return (
    <Button
      onClick={resendOtp}
      type="button"
      className="text-primary w-full disabled:text-gray-400 font-medium"
    >
      {loading ? <Loader borderColor="#3e1492" /> : t("resendOtpButton")}
    </Button>
  );
}

export default ResendOtp;
