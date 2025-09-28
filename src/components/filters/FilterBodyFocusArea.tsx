import { IFilter } from "@/src/interfaces/filters";
import Image from "@/src/components/ui/Image";
import { Button } from "../ui/Button";
import { cn } from "@/src/lib/utils";
import { EmptyStateGrid } from "../ui/empty-state/EmptyStateGrid";

interface IProps {
  filterBodyFocusArea: IFilter[];
  value: number[];
  onChange: (id: number) => void;
}

function FilterBodyFocusArea({ filterBodyFocusArea, value, onChange }: IProps) {
  return (
    <div>
      <h2 className="text-gray-700 font-bold">Filter Body Focus Area</h2>
      <div className="py-5 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {filterBodyFocusArea.length ? (
          filterBodyFocusArea?.map(({ name, id, imageUrl }) => {
            const isActive = value.includes(id);
            return (
              <Button
                key={id}
                type="button"
                onClick={() => onChange(id)}
                className="flex flex-col gap-2 items-center focus:outline-none"
              >
                <div
                  className={cn(
                    "relative h-20 w-20 rounded-full overflow-hidden border-2 transition",
                    isActive ? "border-primary" : "border-transparent"
                  )}
                >
                  <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/5 z-10" />
                </div>
                <h4
                  className={cn(
                    "font-medium text-sm sm:text-base",
                    isActive ? "text-primary" : "text-gray-700"
                  )}
                >
                  {name}
                </h4>
              </Button>
            );
          })
        ) : (
          <EmptyStateGrid message="No foucs area found" />
        )}
      </div>
    </div>
  );
}

export default FilterBodyFocusArea;
