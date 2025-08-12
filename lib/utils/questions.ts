import { preferencesAPI } from "@/services/questions";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
import { handleClientError } from "./errorHandler";

const getPreferencesFromStorage = () => {
  const selectedMusicIdsValue = sessionStorage.getItem("selectedMusicIds");
  const parseSelectedMusicIdsValue = selectedMusicIdsValue
    ? JSON.parse(selectedMusicIdsValue)
    : [];
  const injuryIdsValue = sessionStorage.getItem("injuryIds");
  const parseInjuryIdsValue = injuryIdsValue ? JSON.parse(injuryIdsValue) : [];
  const idealBodyTimeIdValue = sessionStorage.getItem("idealBodyTimeId");
  const trainingPerWeekValue = sessionStorage.getItem("trainingPerWeek");
  const levelIdValue = sessionStorage.getItem("levelId");
  const workoutTimeIdValue = sessionStorage.getItem("workoutTimeId");

  return {
    goalId: Number(sessionStorage.getItem("goalId")),
    heightCm: Number(sessionStorage.getItem("heightCm")),
    ismale: sessionStorage.getItem("ismale") === "true",
    selectedHeight: Number(sessionStorage.getItem("selectedHeight")),
    selectedTrainingAreaIds: JSON.parse(
      sessionStorage.getItem("selectedTrainingAreaIds") || "[]"
    ),
    weightKg: Number(sessionStorage.getItem("weightKg")),
    bodyShapeId: Number(sessionStorage.getItem("bodyShapeId")),

    ...(idealBodyTimeIdValue && {
      idealBodyTimeId: Number(idealBodyTimeIdValue),
    }),
    ...(trainingPerWeekValue && {
      trainingPerWeek: Number(trainingPerWeekValue),
    }),
    ...(parseInjuryIdsValue?.length && {
      injuryIds: parseInjuryIdsValue,
    }),
    ...(levelIdValue && {
      levelId: Number(levelIdValue),
    }),
    ...(workoutTimeIdValue && {
      workoutTimeId: Number(workoutTimeIdValue),
    }),
    ...(parseSelectedMusicIdsValue?.length && {
      selectedMusicIds: parseSelectedMusicIdsValue,
    }),
  };
};

export const sendPreference = async (router: AppRouterInstance) => {
  try {
    const payload = getPreferencesFromStorage();
    const response = await preferencesAPI(payload);
    if (response?.success === true) {
      console.log(response);
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
