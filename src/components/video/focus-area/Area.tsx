import { Button } from "@/src/components/ui/Button";
import { IFoucsArea } from "@/src/interfaces/video";

interface IProps {
  area: IFoucsArea;
}
function Area({ area }: IProps) {
  const { name } = area;
  return (
    <Button className="border rounded-md py-2 px-4 text-sm hover:bg-gray-100 font-medium text-gray-700">
      {name}
    </Button>
  );
}

export default Area;
