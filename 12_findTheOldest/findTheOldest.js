const findTheOldest = (arr) => {
    const date = new Date();
    const year = date.getFullYear();
    const ageArray = [];


    for (let i = 0; i < arr.length; i++) {
        let age;

        if (arr[i].hasOwnProperty("yearOfDeath")) {
            age = arr[i].yearOfDeath - arr[i].yearOfBirth;
        } else {
            age = year - arr[i].yearOfBirth;
        }

        ageArray.push(age);
    }

    const oldest = Math.max(...ageArray);
    const oldestIndex = ageArray.indexOf(oldest);

    console.log(arr[oldestIndex].name);
};

findTheOldest([
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1975,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
    {
        name: "Kane",
        yearOfBirth: 1812,
        yearOfDeath: 1941,
    },
    {
        name: "Jess",
        yearOfBirth: 1912,
        yearOfDeath: 1913,
    },
    {
        name: "Tim",
        yearOfBirth: 1500,
        yearOfDeath: 1941,
    },
]);
// Do not edit below this line
module.exports = findTheOldest;
