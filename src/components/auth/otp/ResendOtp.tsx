import Loader from "@/src/components/loader/Loader";
import { Button } from "@/src/components/ui/Button";
import toast from "react-hot-toast";
import { useActionState } from "react";
import { resendOtpAction } from "@/src/actions/otp";
import { IActionState } from "@/src/interfaces/form";
import { Input } from "@/src/components/ui/Input";
import { useTranslations } from "next-intl";

interface IProps {
  queryParams: Record<string, string>;
  onResend: () => void;
}
const initialState: IActionState = {
  success: false,
  message: "",
  errors: {},
};
function ResendOtp({ queryParams, onResend }: IProps) {
  const t = useTranslations("otp");
  const { type, email, countryCode, number } = queryParams;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, formAction, isPending] = useActionState<IActionState, FormData>(
    async (prevState, formData) => {
      const result = await resendOtpAction(prevState, formData);
      if (result.message) {
        console.log(result);
        if (result.success) {
          toast.success(result.message);
          onResend();
        } else {
          toast.error(result.message);
        }
      }
      return result;
    },
    initialState
  );
  return (
    <form action={formAction}>
      <Input type="hidden" name="type" value={type} />
      {(type === "register-email" || type === "forget-password-email") &&
        email && <Input type="hidden" name="email" value={email} />}
      {(type === "register-number" || type === "forget-password-number") &&
        countryCode &&
        number && (
          <>
            <Input type="hidden" name="countryCode" value={countryCode} />
            <Input type="hidden" name="mobile" value={number} />
          </>
        )}
      <Button
        type="submit"
        className="text-primary w-full disabled:text-gray-400 font-medium"
        disabled={isPending}
      >
        {isPending ? <Loader borderColor="#3e1492" /> : t("resendOtpButton")}
      </Button>
    </form>
  );
}

export default ResendOtp;
