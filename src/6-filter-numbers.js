export const filterNumbers = (array, largerThan) => {
  const checkLarger = (num) => {
    return num <= largerThan;
  }
  return array.filter(checkLarger)
}