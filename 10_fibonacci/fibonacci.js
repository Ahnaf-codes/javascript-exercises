const fibonacci = (n) => {
    const fib = [0, 1];

    for (i = 2; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    console.log(fib[n]);
};

fibonacci();
// Do not edit below this line
module.exports = fibonacci;
