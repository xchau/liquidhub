// Write a Fibonacci series function recursively (without using any kind of loop) – such that if I input say 1000000000, the code should give me 1000000000th fibonacci number – NOTE: Code should be checked for boundary cases.

// Most simple solution; returns nth fib value
function fibNoMemo(n) {
  if (n < 0) return;
  if (n === 1) return 1;
  if (n <= 0) return 0;

  return fib(n - 1) + fib(n - 2);
}

// With "memoization"
// This keeps track of the fib value of each "n" provided, so that future calculations are faster. This is especially important for larger "n" values.

function wrapper(n) {
  const history = {};

  return fibMemo(n);

  function fibMemo(n) {
    if (n < 0) return;
    if (n === 1) return 1;
    if (n <= 0) return 0;

    if (history.hasOwnProperty(n.toString())) {
      return history[String(n)];
    }
    else {
      const result = fibMemo(n - 1) + fibMemo(n - 2);

      history[n.toString()] = result;

      return result;
    }
  }
}
