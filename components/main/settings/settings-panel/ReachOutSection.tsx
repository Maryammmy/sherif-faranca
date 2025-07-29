import { reachOut } from "@/data/main/settings";
import SettingsPanelCard from "./Card";

function ReachOutSection() {
  return (
    <div className="settings-panel-section">
      <div>
        <h3 className="setting-panel-section-heading">Reach Out To Us</h3>
      </div>
      <div className="flex flex-col gap-2">
        {reachOut.map((item) => (
          <SettingsPanelCard key={item.label} setting={item} />
        ))}
      </div>
    </div>
  );
}

export default ReachOutSection;
