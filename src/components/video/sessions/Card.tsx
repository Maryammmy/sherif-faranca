import { Button } from "@/src/components/ui/Button";
import { Clock12 } from "lucide-react";
import Image from "@/src/components/ui/Image";
import { IClassBySession } from "@/src/interfaces/video";
import { getDurationMinutes } from "@/src/lib/utils";
import { useTranslations } from "next-intl";

interface IProps {
  session: IClassBySession;
  index: number;
}
function Session({ session, index }: IProps) {
  const t = useTranslations("card");
  const { calories, endTime, musicGenreName, name, startTime, imageUrl } =
    session;
  const durationMinutes = getDurationMinutes(startTime, endTime);

  return (
    <Button className="p-3 w-full text-start rounded-xl border hover:shadow cursor-pointer flex items-center gap-4">
      <div className="relative w-18 h-18 rounded-xl overflow-hidden">
        <Image src={imageUrl} alt="session" className="object-cover" fill />
      </div>
      <div className="flex flex-col gap-0.5">
        <h2 className="font-bold text-sm">
          {t("session")} {index}
        </h2>
        <div className="flex flex-col gap-0.5 text-sm text-secondary font-medium">
          <p className="truncate">{name}</p>
          <span className="truncate italic text-xs">{musicGenreName}</span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <p>🔥</p>
              <span>
                {calories}
                {t("kcal")}
              </span>
            </div>
            <div className="flex items-center gap-0.5">
              <Clock12 size={18} />
              <span>
                {isNaN(durationMinutes)
                  ? "--"
                  : `${durationMinutes} ${t("mins")}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Button>
  );
}

export default Session;
