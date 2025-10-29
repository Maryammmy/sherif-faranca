import { TranslateFn } from "@/src/types";

export function timeAgo(dateString: string, t: TranslateFn): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return t("timeAgo.dAgo", { value: days });
  if (hours > 0) return t("timeAgo.hAgo", { value: hours });
  if (minutes > 0) return t("timeAgo.mAgo", { value: minutes });
  return t("timeAgo.sAgo", { value: seconds });
}
