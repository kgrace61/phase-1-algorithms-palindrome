function isPalindrome(word) {
let wordBackwards = word.split("").reverse("").join("")
let result;
  if (word ===wordBackwards){
    result = true;
  }
    else {
      result = false;

    }
    return result;
  }


console.log(isPalindrome("abba"))

/* 
  Add your pseudocode here
  
  take word and turn into array
  reverse away
  if else to ===
  if true return "true"
  if false return "false"
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
