/**
 * PROBLEM STATEMENT :  Given two string write a javascript program to determine if the second string is an anagram of the first string
 * @function isAnagram
 * @param string1
 * @param string2
 * 
 * Example : isAnagram('aaz','zza')
 * anagram('','')
 */

// STEPS : 
// 1. Check valid input
// 2. Check String Length 
// 3. Create lookup for any one of string with number of occurance of each character
      // a. Consider characters are insensative
// 4. LOOP : other string
      // a. if character exist then decrement lookup counter
      // b. else, return false (if doesn't exist or counter for that character is zero)
 // 5. return true   

function isAnagram(str1,str2) {
  if(typeof str1 !== 'string' || typeof str2 !== 'string') throw new Error('Please Enter Valid Input');  
  if(str1.length !== str2.length) return false;
  const lookup = {};

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for(const ch of str1){
    lookup[ch] ? lookup[ch]++ : lookup[ch] = 1;
  }

  for(const ch of str2){
    if(lookup[ch]){
        lookup[ch]--;
    }else{
        return false;
    }
  };

  return true;

}

module.exports = isAnagram;

  