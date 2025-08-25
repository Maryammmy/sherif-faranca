import Panel from "@/src/components/ui/Panel";
import Header from "./Header";
import TrainingStats from "./TrainingStats";
import AccountSection from "./AccountSection";
import SettingsSection from "./SettingsSection";
import ReachOutSection from "./ReachOutSection";
import { Button } from "@/src/components/ui/Button";
import { LogOut } from "lucide-react";

interface IProps {
  open: boolean;
  onClose: () => void;
}
function SettingsPanel({ open, onClose }: IProps) {
  return (
    <Panel open={open} onClose={onClose}>
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="relative bg-primary h-[300px] rounded-b-3xl">
          <Header />
          <div className="bg-gray-50 pb-2 absolute top-[80] sm:top-[120px] left-1/2 -translate-x-1/2 w-[calc(100%-20px)] rounded-t-3xl min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-120px)]">
            <div className="flex flex-col gap-2">
              <TrainingStats />
              <AccountSection />
              <SettingsSection />
              <ReachOutSection />
              <Button className="p-3 rounded-md bg-[#DA2828E5] font-medium text-white flex justify-between gap-2">
                <span>Logout</span>
                <LogOut />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Panel>
  );
}

export default SettingsPanel;
