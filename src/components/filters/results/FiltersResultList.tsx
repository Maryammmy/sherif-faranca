"use client";
import { IFiltersResult } from "@/src/interfaces/filters";
import { useEffect, useState } from "react";
import Card from "./Card";

function FiltersResultList() {
  const [results, setResults] = useState<IFiltersResult[]>([]);

  useEffect(() => {
    const stored = sessionStorage.getItem("filtersResults");
    if (stored) {
      setResults(JSON.parse(stored));
    }
  }, []);
  return (
    <div className="grid gap-5 py-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {results?.length ? (
        results?.map((result) => <Card key={result?.id} result={result} />)
      ) : (
        <p className="col-span-full flex justify-center items-center text-lg h-[50vh] text-secondary font-medium">
          No filters results found
        </p>
      )}
    </div>
  );
}

export default FiltersResultList;
