import { IActionState } from "@/interfaces/form";
import { AxiosError } from "axios";

export function handleError(error: unknown): IActionState {
  const err = error as AxiosError<{ message?: string }>;
  return {
    success: false,
    message:
      err.response?.data?.message || err.message || "Something went wrong",
    errors: {},
  };
}
