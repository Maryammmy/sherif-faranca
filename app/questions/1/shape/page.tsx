import ShapeComponent from "@/components/questions/1/shape";
import { getShapesAPI } from "@/services/questions";

async function Shape() {
  const shapes = await getShapesAPI();
  return <ShapeComponent shapes={shapes} />;
}

export default Shape;
