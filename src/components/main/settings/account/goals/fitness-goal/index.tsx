import Modal from "@/src/components/ui/Modal";
import Goals from "./Goals";
import { useTranslations } from "next-intl";

interface IProps {
  open: boolean;
  onClose: () => void;
}
export default function FitnessGoal({ open, onClose }: IProps) {
  const t = useTranslations("myGoal.fitnessGoalModal");
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={t("title")}
      titleClassName="text-gray-700 font-bold text-sm sm:text-xl text-start"
    >
      <Goals onClose={onClose} />
    </Modal>
  );
}
