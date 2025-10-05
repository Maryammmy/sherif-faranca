import Area from "./Area";

interface IProps {
  areas: string[];
}
const FocusArea = ({ areas }: IProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg text-gray-700 font-bold">Focus Area</h2>
      <div className="flex flex-wrap gap-4">
        {areas?.map((area, i) => (
          <Area key={i} area={area} />
        ))}
      </div>
    </div>
  );
};

export default FocusArea;
