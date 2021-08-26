export function encryptCaesar(inputString, key) {
  // TODO: write your code here

  let caesarShift =  (str, key) => {
    // Wraping if key is < 0
    if (key < 0) {
      return caesarShift(str, key + 26);
    }
    // empty variable
    let output = "";
     // looping through each character

    for (let i = 0; i < str.length; i++) {

      // character to be appended
      let char = str[i];

      if (char.match(/[a-z]/i)) {
        // Get its ascii
        let code = str.charCodeAt(i);

        //uppercase
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + key) % 26) + 65);
        }
        //lowercase
        else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + key) % 26) + 97);
        }
      }
      
      //appending to op
      output += char;
    }

    return output;
  };

  return caesarShift(inputString,key);
}
