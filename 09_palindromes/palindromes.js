const palindromes = (str) => {
    const processedStr = str.toLowerCase().replace(/[\W_]/g, ""); //the weird characters are a regex that remove special chars and spaces
    const reverseStr = [...processedStr].reverse().join("");

    return console.log(reverseStr === processedStr);
};

palindromes("A car, a man, a maraca");
// Do not edit below this line
module.exports = palindromes;
