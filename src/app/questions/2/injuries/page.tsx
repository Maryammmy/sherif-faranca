import InjuriesComponent from "@/src/components/questions/2/injuries";
import { getInjuriesAPI } from "@/src/services/mutations/questions";

async function Injuries() {
  const injuries = await getInjuriesAPI();
  return <InjuriesComponent injuries={injuries} />;
}

export default Injuries;
