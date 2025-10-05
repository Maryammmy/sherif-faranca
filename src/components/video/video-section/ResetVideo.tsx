import { Button } from "@/src/components/ui/Button";

interface IProps {
  handleReset: () => void;
}
function ResetVideo({ handleReset }: IProps) {
  return (
    <Button
      onClick={handleReset}
      className="bg-red-600 text-sm text-white font-medium px-6 py-2 rounded-md hover:bg-red-600 transition"
    >
      Reset
    </Button>
  );
}

export default ResetVideo;
