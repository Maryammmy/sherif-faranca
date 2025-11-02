import Modal from "@/src/components/ui/Modal";
import WeightSelector from "./WeightSelector";
import { useTranslations } from "next-intl";

interface IProps {
  open: boolean;
  onClose: () => void;
}
export default function WeightGoal({ open, onClose }: IProps) {
  const t = useTranslations("myGoal.weightGoalModal");
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={t("title")}
      titleClassName="text-gray-700 font-bold text-sm sm:text-xl text-start"
      description={t("description")}
      descriptionClassName="font-medium text-start"
      contentClassName="sm:max-w-[400px]"
    >
      <WeightSelector />
    </Modal>
  );
}
