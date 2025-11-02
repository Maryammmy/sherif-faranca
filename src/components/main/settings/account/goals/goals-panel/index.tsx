import Panel from "@/src/components/ui/Panel";
import Goals from "./Goals";
import { useTranslations } from "next-intl";

interface IProps {
  open: boolean;
  onClose: () => void;
}
function GoalsPanel({ open, onClose }: IProps) {
  const t = useTranslations("myGoal");
  return (
    <Panel
      open={open}
      onClose={onClose}
      title={t("title")}
      titleClassName="text-gray-700 text-center font-bold text-lg"
    >
      <Goals />
    </Panel>
  );
}

export default GoalsPanel;
