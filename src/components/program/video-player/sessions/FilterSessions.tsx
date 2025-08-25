import { Button } from "@/src/components/ui/Button";

function FilterSessions() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-4 font-medium">
      <Button className="bg-primary text-white p-2 rounded-md w-full">
        Class by Session
      </Button>
      <Button className="bg-primary text-white p-2 rounded-md w-full">
        Class by Song
      </Button>
    </div>
  );
}

export default FilterSessions;
