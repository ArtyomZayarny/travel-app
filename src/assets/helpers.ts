export const inRange = (
  x: number,
  min: number,
  max: number | undefined = undefined
): boolean => {
  return max === undefined ? x >= min : x >= min && x <= max;
};
