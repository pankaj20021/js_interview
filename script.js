

const findLongestWord = (str) => {
    if(str.trim().length === 0) {
        return 0;
    }

words = str.split(' ');
// words = words.sort((a,b) => b.length - a.length);
// console.log(words);
// return words[0];

// or 

return words.reduce((a,b) => (  a.length > b.length ? a : b ), "");

};




console.log(findLongestWord('Hello World programing in JavaScript '));