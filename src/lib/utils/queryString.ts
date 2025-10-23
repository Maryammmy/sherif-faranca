export function buildQueryString(params: Record<string, unknown>) {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value === null || value === undefined) return;

    if (Array.isArray(value)) {
      value.forEach((v) => query.append(key, v.toString()));
    } else {
      query.append(key, value.toString());
    }
  });

  return query.toString();
}
