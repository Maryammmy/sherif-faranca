export function formatDateToYYYYMMDD(date?: Date): string {
  if (!date || isNaN(date.getTime())) return "";

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

/**
 * Format ISO string to "26 August"
 * @param {string} isoString
 * @returns {string}
 */
export function formatDateOnly(isoString: string): string {
  const dateObj = new Date(isoString);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("en-US", { month: "long" });
  return `${day} ${month}`;
}
/**
 * Format ISO string to "5:15 AM"
 * @param {string} isoString
 * @returns {string}
 */
export function formatTimeOnly(isoString: string): string {
  const dateObj = new Date(isoString);
  return dateObj.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}
/**
 * تنسيق التاريخ القادم من الـ backend بحيث يعرض فقط yyyy-mm-dd
 * @param dateString - التاريخ القادم مثل "1981-06-25T09:37:24.641"
 * @returns string - "1981-06-25" أو "" لو مش صالح
 */
export function formatDate(dateString?: string | null): string {
  if (!dateString) return "";
  if (!dateString.includes("T")) return dateString; // لو جاي أصلاً تاريخ بس
  return dateString.split("T")[0];
}
