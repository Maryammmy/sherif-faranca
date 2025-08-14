import FiltersComponent from "@/components/filters";
import PrefetchHydrate from "@/components/query";
import { filtersAPI } from "@/services/filters";

function page() {
  return (
    <PrefetchHydrate queryKey={["filters"]} queryFn={filtersAPI}>
      <FiltersComponent />
    </PrefetchHydrate>
  );
}

export default page;
