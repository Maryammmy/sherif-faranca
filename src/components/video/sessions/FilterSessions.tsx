import { Button } from "@/src/components/ui/Button";
import { useRouter } from "@/src/i18n/navigation";
import { useQueryParams } from "@/src/lib/utils";
import { ClassBy } from "@/src/types/video";
import SongList from "./SongList";
import SessionList from "./SessionList";
import { IClassBySession, IClassBySong } from "@/src/interfaces/video";

interface IProps {
  classBySession: IClassBySession[];
  classBySong: IClassBySong[];
  videoId: string;
}

function FilterSessions({ classBySession, classBySong, videoId }: IProps) {
  const classBy = useQueryParams("classBy") || "session";
  const isSong = classBy === "song";
  const router = useRouter();
  const handleSelectClassBy = (classBy: ClassBy) => {
    router.replace(`/videos/${videoId}?classBy=${classBy}`);
  };
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2 sm:gap-4 font-medium">
        <Button
          onClick={() => handleSelectClassBy("session")}
          className="bg-primary text-white p-2 rounded-md w-full"
        >
          Class by Session
        </Button>
        <Button
          onClick={() => handleSelectClassBy("song")}
          className="bg-primary text-white p-2 rounded-md w-full"
        >
          Class by Song
        </Button>
      </div>
      {isSong ? (
        <SongList classBySong={classBySong} />
      ) : (
        <SessionList classBySession={classBySession} />
      )}
    </div>
  );
}

export default FilterSessions;
