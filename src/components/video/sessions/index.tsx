import FilterSessions from "./FilterSessions";
import SessionList from "./SessionsList";

function Sessions() {
  return (
    <div className="space-y-4 max-h-[600px] overflow-y-auto">
      <FilterSessions />
      <SessionList />
    </div>
  );
}
export default Sessions;
