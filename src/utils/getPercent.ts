export const getPercent = (firstPercent: number, secondPercent: number): string => {
  if (firstPercent < 0 || secondPercent < 0) return `calc(145 - (145 * 0) / 100)`;
  if (firstPercent >= secondPercent) return `calc(145 - (145 * 100) / 100)`;
  return `calc(145 - (145 * ${200 - 100 * (firstPercent / secondPercent)}) / 100)`;
};
