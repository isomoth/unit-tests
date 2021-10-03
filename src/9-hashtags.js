export const hashtags = (text) => {
  let textToArray = text.split(' ')
  let finalArray = []
  textToArray.forEach(word => {
    if (word.includes('#')){
      finalArray.push(word)
    }
  });
  return finalArray
}
