export const getHref = (id: number, isProgram?: boolean) => {
  return `/${isProgram ? "programs" : "videos"}/${id}`;
};
