import { IClassBySession } from "@/src/interfaces/video";
import Session from "./Card";

interface IProps {
  classBySession: IClassBySession[];
}
const SessionList = ({ classBySession }: IProps) => {
  return (
    <div className="flex flex-col gap-2">
      {classBySession?.map((session, n) => (
        <Session key={n} session={session} index={n + 1} />
      ))}
    </div>
  );
};

export default SessionList;
