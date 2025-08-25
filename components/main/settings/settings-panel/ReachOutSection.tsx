import { reachOut } from "@/data/main/settings";
import SettingsPanelCard from "./Card";
import { useState } from "react";
import ContactUs from "../reach-out/contact-us";

function ReachOutSection() {
  const [contactUsOpen, setContactUsOpen] = useState(false);
  return (
    <>
      <div className="settings-panel-section">
        <div>
          <h3 className="setting-panel-section-heading">Reach Out To Us</h3>
        </div>
        <div className="flex flex-col gap-2">
          {reachOut.map((item) => (
            <SettingsPanelCard
              key={item.label}
              setting={item}
              {...(item.label === "contact us" && {
                handleOpenContactUs: () => setContactUsOpen(true),
              })}
            />
          ))}
        </div>
      </div>
      <ContactUs open={contactUsOpen} onClose={() => setContactUsOpen(false)} />
    </>
  );
}

export default ReachOutSection;
