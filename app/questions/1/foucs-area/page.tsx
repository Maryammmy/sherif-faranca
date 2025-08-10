import FoucsAreaComponent from "@/components/questions/1/foucs-area";
import { getFoucsAreasAPI } from "@/services/questions";

export default async function FoucsArea() {
  const areas = await getFoucsAreasAPI();
  console.log(areas);
  // try {
  //   const areas = await getFoucsAreasAPI();
  // } catch (error) {
  //   handleClientError(error);
  // }

  return <FoucsAreaComponent areas={areas} />;
}
