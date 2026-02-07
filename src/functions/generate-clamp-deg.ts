export const generateClampDeg = (
  expectedMinDeg: number,
  expectedMaxDeg: number,
  containerMaxPx: number
): string => {
  const preferredVw =
    ((expectedMaxDeg - expectedMinDeg) / (containerMaxPx - 768)) * 100 * 672;

  return `clamp(${expectedMinDeg}deg, ${expectedMinDeg}deg + ${preferredVw}vw, ${expectedMaxDeg}deg)`;
};
