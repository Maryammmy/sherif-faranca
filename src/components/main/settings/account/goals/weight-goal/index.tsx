import Modal from "@/src/components/ui/Modal";
import WeightSelector from "./WeightSelector";

interface IProps {
  open: boolean;
  onClose: () => void;
}
export default function WeightGoal({ open, onClose }: IProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="What's is your Target Weight ?"
      titleClassName="text-gray-700 font-bold text-sm sm:text-xl text-start"
      description="This data will help us tailor your workout to match your body shape and daily work"
      descriptionClassName="font-medium text-start"
      contentClassName="sm:max-w-[400px]"
    >
      <WeightSelector />
    </Modal>
  );
}
