const palindromes = (str) => {
    const processedStr = str.toLowerCase().replaceAll(" ", "");
    const reverseStr = [...processedStr].reverse().join("");

    return reverseStr === processedStr;
};

palindromes("A nut for a jar of tuna");
// Do not edit below this line
module.exports = palindromes;
