import ShapeComponent from "@/src/components/questions/1/shape";
import { getShapesAPI } from "@/src/services/mutations/questions";

async function Shape() {
  const shapes = await getShapesAPI();
  return <ShapeComponent shapes={shapes} />;
}

export default Shape;
