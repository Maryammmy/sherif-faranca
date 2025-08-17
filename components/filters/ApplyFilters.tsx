import { IApplyFilters } from "@/interfaces/filters";
import { handleClientError } from "@/lib/utils";
import { applyFiltersAPI } from "@/services/filters";
import { useState } from "react";
import { Button } from "../ui/Button";
import Loader from "../loader/Loader";
import { useRouter } from "next/navigation";

interface IProps {
  filters: IApplyFilters;
  isDisabled: boolean;
}
function ApplyFilters({ filters, isDisabled }: IProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const applyFilters = async () => {
    try {
      setLoading(true);
      const response = await applyFiltersAPI(filters);
      if (response) {
        sessionStorage.setItem("filtersResults", JSON.stringify(response));
        setTimeout(() => {
          router.push("/filters/results");
        }, 500);
      }
    } catch (error) {
      handleClientError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button
      disabled={isDisabled || loading}
      onClick={applyFilters}
      className="rounded-md font-medium text-white w-full sm:w-50 py-2 bg-primary disabled:bg-gray-200"
    >
      {loading ? <Loader borderColor="#3e1492" /> : "Show Results"}
    </Button>
  );
}

export default ApplyFilters;
