import { Button } from "@/src/components/ui/Button";

function FocusAreas() {
  return (
    <div className="flex justify-center items-center gap-5 pt-5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Button
          key={index}
          className="px-4 py-2 capitalize rounded-lg cursor-pointer font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
        >
          legs
        </Button>
      ))}
    </div>
  );
}

export default FocusAreas;
