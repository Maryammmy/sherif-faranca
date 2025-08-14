import { IFilter } from "@/interfaces/filters";
import Image from "next/image";

interface IProps {
  filterBodyFocusArea: IFilter[];
}
function FilterBodyFocusArea({ filterBodyFocusArea }: IProps) {
  return (
    <div>
      <h2 className="text-gray-700 font-bold">Filter Body Focus Area</h2>
      <div className="py-5 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {filterBodyFocusArea?.map(({ name, id, imageUrl }) => (
          <div key={id} className="flex flex-col gap-2 items-center">
            <div className="relative h-20 w-20 rounded-full overflow-hidden">
              <Image src={imageUrl} alt={name} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/10 z-10" />
            </div>
            <h4 className="font-medium text-sm sm:text-base text-gray-700">
              {name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterBodyFocusArea;
