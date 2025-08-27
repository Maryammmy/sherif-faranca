import { Button } from "@/src/components/ui/Button";

function Goals() {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 text-secondary font-medium">
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <Button
            key={index}
            className="flex items-center capitalize border-gray-200 text-secondary gap-2 border rounded-md px-3 py-2 transition"
          >
            <span>fat burning</span>
          </Button>
        );
      })}
    </div>
  );
}

export default Goals;
