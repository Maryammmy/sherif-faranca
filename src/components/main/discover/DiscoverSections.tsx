import { Button } from "@/src/components/ui/Button";
import { discoverSections } from "@/src/data/main/discover";
import { cn } from "@/src/lib/utils";
import { DiscoverSection } from "@/src/types/main/discover";
import { useTranslations } from "next-intl";

interface IProps {
  selectedSection: string;
  handleSelectSection: (section: DiscoverSection) => void;
}
function DiscoverSections({ selectedSection, handleSelectSection }: IProps) {
  const t = useTranslations("discover.discoverSections");
  return (
    <div className="grid grid-cols-3 place-items-center sm:flex sm:items-center gap-5">
      {discoverSections.map((section, index) => (
        <Button
          key={index}
          onClick={() => handleSelectSection(section)}
          className={cn(
            "font-semibold p-2 sm:text-lg activeBtn capitalize",
            selectedSection === section
              ? "text-primary active"
              : "text-secondary"
          )}
        >
          {t(section)}
        </Button>
      ))}
    </div>
  );
}

export default DiscoverSections;
