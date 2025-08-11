import FoucsAreaComponent from "@/components/questions/1/foucs-area";
import { getFoucsAreasAPI } from "@/services/questions";

export default async function FoucsArea() {
  const areas = await getFoucsAreasAPI();
  return <FoucsAreaComponent areas={areas} />;
}
