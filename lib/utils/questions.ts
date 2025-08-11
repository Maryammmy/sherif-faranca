import { preferencesAPI } from "@/services/questions";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
import { handleClientError } from "./errorHandler";

const getPreferencesFromStorage = () => ({
  goalId: Number(sessionStorage.getItem("goalId")),
  heightCm: Number(sessionStorage.getItem("heightCm")),
  ismale: sessionStorage.getItem("ismale") === "true",
  selectedHeight: Number(sessionStorage.getItem("selectedHeight")),
  selectedTrainingAreaIds: JSON.parse(
    sessionStorage.getItem("selectedTrainingAreaIds") || "[]"
  ),
  weightKg: Number(sessionStorage.getItem("weightKg")),
  bodyShapeId: Number(sessionStorage.getItem("bodyShapeId")),
});

export const sendPreference = async (router?: AppRouterInstance) => {
  try {
    const payload = getPreferencesFromStorage();
    const response = await preferencesAPI(payload);
    if (response?.success === true) {
      toast.success(response?.message);
      if (router) {
        setTimeout(() => {
          router.push("/");
        }, 500);
      }
    }
    return response;
  } catch (error) {
    handleClientError(error);
  }
};
