import Modal from "@/src/components/ui/Modal";
import Goals from "./Goals";

interface IProps {
  open: boolean;
  onClose: () => void;
}
export default function FitnessGoal({ open, onClose }: IProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="What's your main goal?"
      titleClassName="text-gray-700 font-bold text-sm sm:text-xl text-start"
    >
      <Goals />
    </Modal>
  );
}
