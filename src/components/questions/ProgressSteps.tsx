interface IProps {
  progresses: number[];
}

export default function ProgressSteps({ progresses }: IProps) {
  return (
    <div className={`grid grid-cols-3 gap-6 w-full`}>
      {progresses.map((progress, index) => (
        <div key={index} className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-primary rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      ))}
    </div>
  );
}
