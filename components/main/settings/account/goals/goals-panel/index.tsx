import Panel from "@/components/ui/Panel";
import Goals from "./Goals";

interface IProps {
  open: boolean;
  onClose: () => void;
}
function GoalsPanel({ open, onClose }: IProps) {
  return (
    <Panel
      open={open}
      onClose={onClose}
      title="My Goal"
      titleClassName="text-gray-700 text-center font-bold text-lg"
    >
      <Goals />
    </Panel>
  );
}

export default GoalsPanel;
