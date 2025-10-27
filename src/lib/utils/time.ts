export const getDurationMinutes = (
  startTime?: string | Date,
  endTime?: string | Date
): number => {
  if (!startTime || !endTime) return NaN; // لو القيم مش موجودة

  const start = new Date(startTime).getTime();
  const end = new Date(endTime).getTime();

  if (isNaN(start) || isNaN(end)) return NaN; // لو التاريخ غير صالح

  return Math.floor((end - start) / 60000); // فرق الوقت بالدقائق
};
