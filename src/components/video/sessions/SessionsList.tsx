import Session from "./Session";

const SessionList = () => {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: 10 }).map((_, n) => (
        <Session key={n} session={n + 1} />
      ))}
    </div>
  );
};

export default SessionList;
