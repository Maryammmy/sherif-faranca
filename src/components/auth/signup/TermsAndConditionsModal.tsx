import Loader from "@/src/components/loader/Loader";
import { Button } from "../../ui/Button";
import Modal from "../../ui/Modal";

interface IProps {
  open: boolean;
  onClose: () => void;
  isPending: boolean;
  onAgree: () => void;
}

function TermsAndConditionsModal({
  open,
  onClose,
  isPending,
  onAgree,
}: IProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Terms & Conditions and Privacy Policy"
      titleClassName="text-gray-800 p-4 pb-0 text-center font-bold sm:text-xl leading-8"
      footer={
        <div className="w-full grid grid-cols-2 gap-5 sm:gap-10 font-medium">
          <Button
            type="button"
            onClick={onClose}
            className="border border-primary text-primary rounded-md py-2.5"
          >
            Decline
          </Button>
          <Button
            onClick={onAgree}
            disabled={isPending}
            type="button"
            className="bg-primary text-white rounded-md py-2.5"
          >
            {isPending ? <Loader /> : "I Agree"}
          </Button>
        </div>
      }
    >
      <div className="overflow-y-auto h-[50vh]">
        <p className="bg-gray-50 p-2 sm:p-4 font-medium text-secondary">
          Terms and Conditions: Acceptance: By using the Re-Dus app, you agree
          to comply with all applicable terms and conditions. Usage: This app is
          for personal use only and may not be used for commercial purposes
          without permission. Account: You are responsible for the security of
          your account and all activities that occur within it. Content: You
          must not upload content that violates copyright, privacy, or
          applicable laws. Changes: We reserve the right to change the terms and
          conditions at any time and will notify you of these changes through
          the app or via email. Privacy Policy: Data Collection: We collect
          personal data such as name, email, and location to process
          transactions and improve our services. Data Usage: Your data is used
          for internal purposes such as account management, usage analysis, and
          service offerings. Security: We protect your data with appropriate
          security measures to prevent unauthorized access. Data Sharing: We do
          not share your personal data with third parties without your consent,
          except as required by law. Your Rights: You can access, update, or
          delete your personal data at any time through the app settings or by
          contacting us.
        </p>
      </div>
    </Modal>
  );
}

export default TermsAndConditionsModal;
