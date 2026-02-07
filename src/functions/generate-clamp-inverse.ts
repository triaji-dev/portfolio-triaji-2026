export const generateClampInverse = (
  desktopPx: number,
  mobilePx: number,
  containerMaxPx: number
): string => {
  const desktopRem = (desktopPx / 16).toFixed(2);
  const mobileRem = (mobilePx / 16).toFixed(2);

  const minVwPx = 320;
  const maxVwPx = containerMaxPx;

  const preferredVwCoeff = (
    (mobilePx - desktopPx) /
    (maxVwPx - minVwPx)
  ).toFixed(6);

  return `clamp(${desktopRem}rem, calc(${mobileRem}rem - ${preferredVwCoeff} * (100vw - ${minVwPx}px)), ${mobileRem}rem)`;
};
