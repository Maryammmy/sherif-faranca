"use client";
import { IFiltersResult } from "@/src/interfaces/filters";
import { useEffect, useState } from "react";
import Card from "./Card";
import { useTranslations } from "next-intl";
import { EmptyStatePage } from "../../ui/empty-state/EmptyStatePage";

function FiltersResultList() {
  const t = useTranslations("fliters.results");
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
        <EmptyStatePage message={t("noFiltersResultsFound")} />
      )}
    </div>
  );
}

export default FiltersResultList;
