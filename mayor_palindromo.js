function findLargestPalindrome(words) {
  let largest = null;
  
  words.forEach(function(word){
    let reverse = word.split("").reverse().join("");
    if (reverse === word && word.length > (largest || "").length){
      largest = word;
    }
  })

  // Return null if no palindrome was found
  return largest !== null ? largest : null;
}

console.log(findLargestPalindrome(["racecar", "level", "world", "hello"])); // Should print "racecar"