import Loader from "@/components/loader/Loader";
import { Button } from "@/components/ui/Button";
import toast from "react-hot-toast";
import { useActionState } from "react";
import { resendOtpAction } from "@/actions/otp";
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
        {isPending ? <Loader borderColor="#3e1492" /> : "Send Code Again"}
      </Button>
    </form>
  );
}

export default ResendOtp;
