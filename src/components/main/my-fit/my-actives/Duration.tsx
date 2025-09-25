import { Button } from "@/src/components/ui/Button";
import { Clock12 } from "lucide-react";

function Duration() {
  return (
    <div className="border rounded-xl flex flex-col gap-1 py-5 justify-between items-center">
      <div className="flex items-center gap-3">
        <Button className="w-10 h-10 rounded-full bg-gray-200/70 flex items-center justify-center">
          <Clock12 size={20} />
        </Button>
        <h3 className="text-gray-950 font-medium">Duration</h3>
      </div>
      <div className="font-medium flex flex-col items-center gap-1">
        <span className="text-gray-700">1,45</span>
        <span className="text-secondary text-sm">Hrs</span>
      </div>
    </div>
  );
}

export default Duration;
