import IdealBodyTimeComponent from "@/components/questions/2/ideal-body-time";
import { getIdealBodyAPI } from "@/services/questions";

async function IdealBodyTime() {
  const idealbodies = await getIdealBodyAPI();
  return <IdealBodyTimeComponent idealBodies={idealbodies} />;
}

export default IdealBodyTime;
