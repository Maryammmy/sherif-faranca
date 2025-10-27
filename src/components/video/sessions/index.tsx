import { IClassBySession, IClassBySong } from "@/src/interfaces/video";
import FilterSessions from "./FilterSessions";

interface IProps {
  classBySession: IClassBySession[];
  classBySong: IClassBySong[];
  videoId: string;
}

function Sessions({ classBySession, classBySong, videoId }: IProps) {
  return (
    <div className="max-h-[600px] overflow-y-auto">
      <FilterSessions
        classBySession={classBySession}
        classBySong={classBySong}
        videoId={videoId}
      />
    </div>
  );
}
export default Sessions;
