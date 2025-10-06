import Loader from "@/src/components/loader/Loader";
import { Button } from "../../ui/Button";
import Modal from "../../ui/Modal";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("createAccount.modal");
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={t("title")}
      titleClassName="text-gray-800 p-4 pb-0 text-center font-bold sm:text-xl leading-8"
      footer={
        <div className="w-full grid grid-cols-2 gap-5 sm:gap-10 font-medium">
          <Button
            type="button"
            onClick={onClose}
            className="border border-primary text-primary rounded-md py-2.5"
          >
            {t("decline")}
          </Button>
          <Button
            onClick={onAgree}
            disabled={isPending}
            type="button"
            className="bg-primary text-white rounded-md py-2.5"
          >
            {isPending ? <Loader /> : t("agree")}
          </Button>
        </div>
      }
    >
      <div className="overflow-y-auto h-[50vh]">
        <p className="bg-gray-50 p-2 sm:p-4 font-medium text-secondary">
          {t("description")}
        </p>
      </div>
    </Modal>
  );
}

export default TermsAndConditionsModal;
