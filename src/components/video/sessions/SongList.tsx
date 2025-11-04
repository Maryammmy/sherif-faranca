import { IClassBySong } from "@/src/interfaces/video";
import Song from "./Card";
import { useTranslations } from "next-intl";

interface IProps {
  classBySong: IClassBySong[];
}
const SongList = ({ classBySong }: IProps) => {
  const t = useTranslations("card");
  return (
    <div className="flex flex-col gap-2">
      {classBySong?.map((song, index) => (
        <div key={index} className="flex flex-col gap-1">
          <h3 className="text-sm font-bold">
            {t("segment")} {index + 1}
          </h3>
          {song?.segments?.map((segment, sIndex) => (
            <Song key={sIndex} index={index + 1} session={segment} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SongList;
