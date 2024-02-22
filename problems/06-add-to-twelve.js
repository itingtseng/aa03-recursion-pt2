/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

//base: arr.length == 0
//recursive: 
//step: 

function addToTwelve(arr) {
  // Your code here 
  if (arr.length == 0) {
    return false
  }
  else if (arr[0]+ arr[1] == 12) {
    return true
  }
  else {
    arr.shift()
    return addToTwelve(arr)
  }
}

console.log(addToTwelve([1, 3, 4, 7, 5])); // true
console.log(addToTwelve([1, 3, 4, 7, 6])); // false
console.log(addToTwelve([1, 11, 4, 7, 6])); // true
console.log(addToTwelve([1, 12, 4, 7, 6])); // false
console.log(addToTwelve([1])); // false

// base flavors = 0
// recursive flavors.pop() !== favorite
// step flavors.pop

function iceCreamShop(flavors, favorite) {

  if (flavors.length == 0) {
    return false
  }
  else if (flavors.pop() == favorite) {
    return true
  }
  else {
    return (iceCreamShop(flavors, favorite))
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
