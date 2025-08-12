import FoucsAreaComponent from "@/components/questions/1/foucs-area";
import { getFoucsAreaAPI } from "@/services/questions";

export default async function FoucsArea() {
  const areas = await getFoucsAreaAPI();
  return <FoucsAreaComponent areas={areas} />;
}
