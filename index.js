function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  newArray = [1, 2, 3]
  final = newArray.forEach(function(element, index, array) {
    callback(newArray)
  })
  return newArray
}

function doToArray(array, callback) {
  array.forEach(callback)
}
