export const hackerSpeak = (words) => {
  return words.replace(/[aA]/g, 4).replace(/[eE]/g, 3).replace(/[iI]/g, 1).replace(/[oO]/g, 0).replace(/[sS]/g, 5)
}
