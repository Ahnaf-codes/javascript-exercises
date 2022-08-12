const getTheTitles = function (arr) {
    const titles = [];
    for (let i = 0; i < arr.length; i++) {
        const title = arr[i].title;
        titles.push(title);
    }
    console.log(titles);
};

getTheTitles([
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]);
// Do not edit below this line
module.exports = getTheTitles;
