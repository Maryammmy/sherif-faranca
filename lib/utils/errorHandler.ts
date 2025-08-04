import { IActionState } from "@/interfaces/form";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export function handleServerError(error: unknown): IActionState {
  const err = error as AxiosError<{ message?: string }>;
  return {
    success: false,
    message:
      err.response?.data?.message || err.message || "Something went wrong",
    errors: {},
  };
}
export function handleClientError(error: unknown) {
  const err = error as AxiosError<{ message?: string }>;
  const errorMessage =
    err.response?.data?.message || err.message || "Something went wrong";
  toast.error(errorMessage);
}
