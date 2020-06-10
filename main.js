let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
console.log();
console.log(story);
console.log();
const storyWords = story.split(' ');
const storyWordCount = storyWords.length;
//console.log(storyWords);
//console.log(storyWords.length);
const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));
const betterStoryWordCount = betterWords.length;
//console.log(betterWords);
//console.log(betterWords.length);

const filterOutOverusedWords = anArray => {
    let wordsToCombThrough = anArray;
const combedThroughArray = overusedWords.map(overusedWord => {
    let allowedCount = 0;
    let deniedCount = 0;
    const combedThroughWords = wordsToCombThrough.map(word => {
        if (word !== overusedWord) {
            return word;
        } else if (word === overusedWord && (deniedCount - allowedCount) % 2 === 0) {
            allowedCount++;
            return word;
        } else {
            deniedCount++;
        }
    });
    wordsToCombThrough = combedThroughWords;
    return combedThroughWords;
});

return evenBetterWords = combedThroughArray[combedThroughArray.length - 1].filter(word => !(word === undefined));
};

const multipleWords = () => {
    const segregatedWords = [];
    evenBetterWords.forEach(word => {
        if (segregatedWords.indexOf(word.toUpperCase()) === -1) {
            segregatedWords.push(word.toUpperCase());
        } else {
            segregatedWords.splice(segregatedWords.indexOf(word.toUpperCase()), 0, word.toUpperCase());
        };
    });
    const multipleSegregatedWords = segregatedWords.filter(word => (segregatedWords.lastIndexOf(word) - segregatedWords.indexOf(word) > 0));
    return multipleSegregatedWords;
}




const sentenceCount = betterWords.reduce((wordCount, word) => word[word.length - 1] === ('.' || '?' || '!') ? wordCount + 1 : wordCount, 0);

const storyReport = () => {
    console.log(`This story consists of ${sentenceCount} sentences.`);
    console.log();
    console.log(`The original story word count was ${storyWordCount}, it went down to ${betterStoryWordCount} after removing unnecessary words.`);
    console.log();
    overusedWords.forEach(overusedWord => {
        let overusedWordsCount = betterWords.reduce ((wordCount, word) => (word === overusedWord) ? wordCount + 1 : wordCount, 0);
         
        if (overusedWordsCount > 2) {
            console.log(`The word "${overusedWord}" was used ${overusedWordsCount} times.`);
        } else if (overusedWordsCount === 2) {
            console.log(`The word "${overusedWord}" was used twice.`);
        } else if (overusedWordsCount === 1) {
            console.log(`The word "${overusedWord}" was used once.`);
        } else {
            console.log(`The word "${overusedWord}" was not used.`);
        };
    });
    filterOutOverusedWords(betterWords);
    console.log();
    console.log(`After filtering out some overused words, the total word count went down from ${betterStoryWordCount} to ${evenBetterWords.length}.`);
    console.log(`The edited story is as follows:`);
    console.log();
    console.log(evenBetterWords.join(' '));

   
    multipleWords();
    // console.log(multipleWords());
    const mostCommonWords = () => {
        const wordsArr = multipleWords();
        const wordsFrequencyArr = [];
        for (let i = wordsArr.length - 1; i >= 0; i--) {
            for (let j = 0; j < wordsArr.length; j++) {
                if ((wordsArr.lastIndexOf(wordsArr[j]) - wordsArr.indexOf(wordsArr[j]) === i && !wordsFrequencyArr.includes(wordsArr[j]))) {
                    wordsFrequencyArr.push(wordsArr[j]);
                    wordsFrequencyArr.push(i + 1);
                }
            }
        };
        return wordsFrequencyArr;
    };
    mostCommonWords();
    //console.log(mostCommonWords());
    console.log();
    console.log(`The four most commonly used words are:`);
    console.log();
    for (let i = 0; i < 6; i += 2) {
        if (mostCommonWords()[i + 1] > 2) {
            console.log(`"${mostCommonWords()[i]}" which was used ${mostCommonWords()[i + 1]} times,`);
        } else {
            console.log(`"${mostCommonWords()[i]}" which was used twice,`);
        }
    }
    if (mostCommonWords()[7] > 2) {
        console.log(`and "${mostCommonWords()[6]}" which was used ${mostCommonWords()[7]} times.`);
    } else {
        console.log(`and "${mostCommonWords()[6]}" which was used twice.`);
    };
    console.log();
};




storyReport();

/*let arrayNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 8, 4, 16, 2, 15, 17, 19] // how many over 12? how many even numbers?
let arrayLetters = ['A', 'b', 'C', 'd', 'E', 'f']
let moreThanTwelve = arrayNumbers.reduce((a, b) => b > 12 ? a + 1 : a, 0);
console.log(moreThanTwelve); // 6
let evenNumbers = arrayNumbers.reduce((a, b) => (b % 2 === 0) ? a + 1 : a, 0);
console.log(evenNumbers); // 4 */

/*const everyOther = [2, 5, 0, 4, 0, 7, 0, 0, 9, 0, 2, 2, 4, 1, 0, 5, 8, 0, 0, 0, 5, 7, 6, 0, 0, 0, 3, 1, 3, 4, 0, 5];
const noZeros = everyOther.filter(num => num !== 0);
console.log(noZeros);
const halfZeros = [];
let zeroZeroLoop = 0;
everyOther.forEach(num => {
    let zeroCount = halfZeros.reduce((numberCount, number) => number === 0 ? numberCount + 1 : numberCount, 0);
    console.log(halfZeros, halfZeros.length, zeroCount, zeroZeroLoop);
    if (num !== 0) {
        halfZeros.push(num);
    } else if (num === 0 && (zeroZeroLoop - zeroCount) % 2 === 0) {
        halfZeros.push(num);
        
    } else {
        zeroZeroLoop++;
    };
    console.log(halfZeros);
});

console.log(halfZeros.join(''), halfZeros.join('').length);*/

/*const toRemoveZeroTwosFives = [3, 7, 6, 0, 0, 2, 6, 7, 5, 5, 5, 5, 4, 3, 2, 0, 5, 6, 0, 2, 2, 5, 4, 3, 2, 9, 7, 2, 5, 5, 0, 0, 0, 0, 4];
const zeroTwoFives = [0, 2, 5];
let operationalArray = toRemoveZeroTwosFives;
const afterRemovingZeroTwoFives = zeroTwoFives.map(badNum => {
    
    let refusedBadNumberCount = 0;
    let allowedBadNumberCount = 0;
    const afterRemovingSomething = operationalArray.map(num => {
        //console.log(badNum, num, refusedBadNumberCount, allowedBadNumberCount);
        if (num !== badNum) {
            return num;
        } else if (num === badNum && (refusedBadNumberCount - allowedBadNumberCount) % 2 === 0) {
            allowedBadNumberCount++;
            return num;
        } else {
            
            refusedBadNumberCount++;
            return null;
        };
    });
    operationalArray = afterRemovingSomething;
    //console.log(operationalArray.join(''));
    return afterRemovingSomething;
});
console.log(afterRemovingZeroTwoFives);
console.log(afterRemovingZeroTwoFives[afterRemovingZeroTwoFives.length - 1].filter(num => num !== null).join(','));*/

//counting elements...
/*const stringyString = 'DABCBGCDDBAABCCCBEEEBFDBCBAAABDBE';
const stringyArr = stringyString.split('');
console.log(stringyArr);
const countyArr = [];
stringyArr.forEach(letter => {
    if(countyArr.indexOf(letter) === -1) {
        countyArr.push(letter);
    } else {
        countyArr.splice(countyArr.indexOf(letter), 0, letter);
    }
});*/
//countyArr.forEach(letter => {
  //  console.log(`${letter}: ${countyArr.lastIndexOf(letter) - countyArr.indexOf(letter) + 1}`);
//})
//console.log(countyArr.join(''));