import InjuriesComponent from "@/components/questions/2/injuries";
import { getInjuriesAPI } from "@/services/questions";

async function Injuries() {
  const injuries = await getInjuriesAPI();
  return <InjuriesComponent injuries={injuries} />;
}

export default Injuries;
