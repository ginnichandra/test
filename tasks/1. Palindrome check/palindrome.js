export function isPalindrome(inputString) {
  // TODO: write your code here

  const updatedStr = inputString.toLowerCase().replace(/[\W_]/g, '');

  for(let i=0; i< updatedStr.length / 2 ; i++) {
    if(updatedStr[i] !== updatedStr[updatedStr.length - 1 - i]){
      return false;
    }
  }
return true;
}