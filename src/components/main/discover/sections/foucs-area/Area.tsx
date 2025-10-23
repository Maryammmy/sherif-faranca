import { IFoucsArea } from "@/src/interfaces/main/discover";
import Image from "@/src/components/ui/Image";

interface IProps {
  area: IFoucsArea;
  selectedFocusAreas: number[];
  onSelectFocusArea: (id: number) => void;
}

function Area({ area, selectedFocusAreas, onSelectFocusArea }: IProps) {
  const { id, imageUrl, name } = area;

  // ✅ تحقق هل الـ area دي selected
  const isSelected = selectedFocusAreas.includes(id);

  return (
    <button
      type="button"
      onClick={() => onSelectFocusArea(id)}
      className="flex flex-col gap-2 items-center focus:outline-none"
    >
      <div
        className={`relative h-20 w-20 rounded-full overflow-hidden transition 
          ${
            isSelected
              ? "ring-4 ring-primary"
              : "hover:ring-2 hover:ring-gray-300"
          }`}
      >
        <Image src={imageUrl} alt={name} fill className="object-cover" />
        <div
          className={`absolute inset-0 transition ${
            isSelected ? "bg-black/30" : "bg-black/5"
          }`}
        />
      </div>
      <h4
        className={`font-medium text-sm sm:text-base capitalize transition ${
          isSelected ? "text-primary" : "text-secondary"
        }`}
      >
        {name}
      </h4>
    </button>
  );
}

export default Area;
