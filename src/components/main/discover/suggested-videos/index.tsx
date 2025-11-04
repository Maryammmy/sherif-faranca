import SuggestedVideos from "./SuggestedVideos";
import { ISuggestedVideo } from "@/src/interfaces/main/discover";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";

interface IProps {
  videos: ISuggestedVideo[] | undefined;
}
function SuggestedVideo({ videos }: IProps) {
  const t = useTranslations("discover.suggestedVideos");
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-700 text-lg font-semibold capitalize">
          {t("title")}
        </h2>
        <Link
          href="/classes"
          className="border-b border-secondary text-secondary font-medium"
        >
          <span>{t("viewAll")}</span>
        </Link>
      </div>
      <SuggestedVideos videos={videos} />
    </div>
  );
}

export default SuggestedVideo;
