export function areParenthesesBalanced(inputString) {
  // TODO: write your code here

  const isParenthesMatching = (inputString) => {

    let emptyArr = [];

    let open = {
        '(' : ')'
    };

    let closed = {
        ')': true
    }

    for (let i = 0; i < inputString.length; i++) {

        let char = inputString[i];

        if (open[char]) {
            emptyArr.push(char);
        } else if (closed[char]) {
            if (open[emptyArr.pop()] !== char) return false;
        }
    }
    return emptyArr.length === 0;
}


 return isParenthesMatching(inputString);
}