import { Button } from "@/components/ui/Button";

interface IProps {
  area: string;
}
function Area({ area }: IProps) {
  return (
    <Button className="border rounded-md py-2 px-4 text-sm hover:bg-gray-100 font-medium text-gray-700">
      {area}
    </Button>
  );
}

export default Area;
