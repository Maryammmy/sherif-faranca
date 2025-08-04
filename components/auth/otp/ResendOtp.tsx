import Loader from "@/components/loader/Loader";
import { Button } from "@/components/ui/Button";
import toast from "react-hot-toast";
import { useActionState } from "react";
import { resendOtpAction } from "@/actions/otp/resendOtp";
import { IActionState } from "@/interfaces/form";
import { Input } from "@/components/ui/Input";

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
  const { type, email, countryCode, mobile } = queryParams;
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
      {type === "register-email" && email && (
        <Input type="hidden" name="email" value={email} />
      )}
      {type === "register-number" && countryCode && mobile && (
        <>
          <Input type="hidden" name="countryCode" value={countryCode} />
          <Input type="hidden" name="mobile" value={mobile} />
        </>
      )}
      <Button
        type="submit"
        className="text-primary w-full disabled:text-gray-400 font-medium"
        disabled={isPending}
      >
        {isPending ? <Loader borderColor="#3e1492" /> : "Send Code Again"}
      </Button>
    </form>
  );
}

export default ResendOtp;
