import { IApplyFilters } from "@/src/interfaces/filters";
import { applyFiltersAPI } from "@/src/services/mutations/filters";
import { useState } from "react";
import { Button } from "../ui/Button";
import Loader from "../loader/Loader";
import { useRouter } from "@/src/i18n/navigation";
import toast from "react-hot-toast";

interface IProps {
  filters: IApplyFilters;
  isDisabled: boolean;
}
function ApplyFilters({ filters, isDisabled }: IProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const applyFilters = async () => {
    setLoading(true);
    const response = await applyFiltersAPI(filters);
    if (response.success) {
      sessionStorage.setItem("filtersResults", JSON.stringify(response.data));
      setTimeout(() => {
        router.push("/filters/results");
      }, 500);
    } else {
      toast.error(response.message);
    }

    setLoading(false);
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
