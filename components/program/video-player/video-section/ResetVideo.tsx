import { Button } from "@/components/ui/Button";

interface IProps {
  handleReset: () => void;
}
function ResetVideo({ handleReset }: IProps) {
  return (
    <div className="flex justify-end gap-4">
      <Button
        onClick={handleReset}
        className="bg-red-600 text-sm text-white font-medium px-6 py-2 rounded-md hover:bg-red-600 transition"
      >
        Reset
      </Button>
    </div>
  );
}

export default ResetVideo;
