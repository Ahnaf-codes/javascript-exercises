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

// Do not edit below this line
module.exports = findTheOldest;
