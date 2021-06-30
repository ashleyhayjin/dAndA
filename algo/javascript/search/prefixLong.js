var longestCommonPrefix = function(strs) {
    // check how many letters are odd
    // have a var hold the word with the longest prefix
    // if a string has the greatest prefix, return the letters 
      let longest = '';
    //   if there is nothing in the array, return the empty string
      if (strs.length === 0) {
        return longest;
      }
    // let the first word in the array be the word you compare all the words to
      let comparisonWord = strs[0];
    //   let the index start at 0
      let comparisonIndex = 0;
    
    //   go through the letters in the word
      for (let comparisonLetter of comparisonWord) {
        //   starting at the index of 1/ 2nd word in the array
        for (let i = 1; i < strs.length; i++) {
            // set the current word to the word at index of i(starting with 1)
          let currentWord = strs[i];
        //   check the letter of the word at[i] starting at 0
          let currentLetter = currentWord.charAt(comparisonIndex);
            // for each word check if the comparison index is greatest than length of the current word or check if the comparison letter does not equal the current letter
          if (comparisonIndex > currentWord.length || comparisonLetter !== currentLetter) {
            return longest;
          }
        }
        comparisonIndex++;
        longest += comparisonLetter;
      }
    
      return longest;
    };
    