export function getFizzBuzzUntil(n) {
  // TODO: write your code here

let result=[];
for(let i =1;i<=n+1;i++){

if (i%3 === 0 && i%5 !== 0) {
  result.push("Fizz");
} 

else if (i%5 === 0 && i%3 !== 0) {
  result.push("Buzz");
}

else if (i%5 === 0 && !i%3 === 0) {
  result.push("FizzBuzz");
}
else {
  result.push(i); 
}
}

return result;
}
