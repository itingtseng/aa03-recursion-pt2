/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

//base: str.length == 0
//recursive: str.length > 0; str.length<length
//step: move from end to start

function reverse(str) {
  // Your code here 
  if (str.length == 0) {
    return str
  }
  else {
    return str.slice(-1) + reverse(str.slice(0, -1))
  }
}

console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
console.log(reverse("atom")); // "mota"
console.log(reverse("q")); // "q"
console.log(reverse("id")); // "di"
console.log(reverse("")); // ""

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
