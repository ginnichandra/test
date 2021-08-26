export function getFibonacciUntil(n) {
  //TODO write your code here, remember it should be recursive


const fib =  (n) => {
  if (n < 2) {
      return [0,1];   
  }

  let arr = fib(n - 1);
  arr.push(arr[n - 2] + arr[n - 1]);
  return arr;
};

return fib(n-1);

}


