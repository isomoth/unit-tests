export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    if (stringArrayOrObject === ''){
      return true
    }
    return false
  }
  else if (type === 'array'){
    if (stringArrayOrObject.length === 0){
      return true
    }
    return false
  }
  else if (type === 'object') {
    if (Object.keys(stringArrayOrObject).length === 0) {
      return true
    }
    return false
  }
}
