import { MoveLeft } from "lucide-react";
import Link from "next/link";
import FiltersResultList from "./FiltersResultList";

function FiltersResults() {
  return (
    <div className="padding-layout">
      <div className="flex justify-between items-center gap-2 text-gray-700 pb-5">
        <Link href="/filters">
          <MoveLeft className="size-6" />
        </Link>
        <header className="flex-1 flex justify-center">
          <h1 className="font-bold text-lg sm:text-2xl">Filters Results</h1>
        </header>
      </div>
      <FiltersResultList />
    </div>
  );
}

export default FiltersResults;
