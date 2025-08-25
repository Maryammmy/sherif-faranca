import FoucsAreaComponent from "@/src/components/questions/1/foucs-area";
import { getFoucsAreaAPI } from "@/src/services/mutations/questions";

export default async function FoucsArea() {
  const areas = await getFoucsAreaAPI();
  return <FoucsAreaComponent areas={areas} />;
}
