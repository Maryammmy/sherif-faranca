interface Props {
  customValue: number;
  onSelect: (value: number) => void;
}

export default function CustomGoalsTab({ customValue, onSelect }: Props) {
  const customSteps = Array.from({ length: 8 }, (_, i) => 5000 + i * 500);

  return (
    <div className="flex flex-col items-center">
      {customSteps.map((value) => (
        <div
          key={value}
          onClick={() => onSelect(value)}
          className={`py-2 text-lg font-semibold cursor-pointer transition ${
            customValue === value ? "text-primary scale-110" : "text-gray-400"
          }`}
        >
          {value}
        </div>
      ))}
    </div>
  );
}
