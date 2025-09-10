import IdealBodyTimeComponent from "@/src/components/questions/2/ideal-body-time";
import { getIdealBodyAPI } from "@/src/services/mutations/questions";

async function IdealBodyTime() {
  const idealbodies = await getIdealBodyAPI();
  return <IdealBodyTimeComponent idealBodies={idealbodies} />;
}

export default IdealBodyTime;
