import FiltersComponent from "@/src/components/filters";
import PrefetchHydrate from "@/src/components/query";
import { filtersAPI } from "@/src/services/queries/filters";

function page() {
  return (
    <PrefetchHydrate queryKey={["filters"]} queryFn={filtersAPI}>
      <FiltersComponent />
    </PrefetchHydrate>
  );
}

export default page;
