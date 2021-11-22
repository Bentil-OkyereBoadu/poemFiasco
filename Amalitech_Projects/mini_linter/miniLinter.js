let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];


//putting all words in story in an array
const storyWords = story.split(' ');
const wordCount = storyWords.length;

//filtering out array to remove unnecessary words
const betterWords = storyWords.filter(storyWord => {
    if (storyWord !== 'literally' && storyWord !== 'extremely' && storyWord !== 'actually'){
        return storyWord;
    }
});

//filter out overused words into an array
const counter = betterWords.filter(overusedWord => {
    if (overusedWord === 'really' || overusedWord === 'very' || overusedWord === 'basically'){
    return overusedWord;
    }
});

//getting number of over used words using length of array
const countOverUsedWords = counter.length ;

//finding how many times each over used words is used
let really = 0;
    let very = 0;
    let basically = 0;
const numOfTimes = counter.filter(overusedWord => {
    
    if(overusedWord === 'really'){
        really += 1;
    }
    else if (overusedWord === 'very'){
        very += 1;
    }
    else if(overusedWord === 'basically'){
        basically += 1;
    }
});

//filtering to find the sentence endings
const checkPunctuations = betterWords.filter(punctuations => {
    if( punctuations.includes('.') || punctuations.includes('!')){
        return punctuations;
    }
});

const paragraph = storyWords.join(' ');

//getting number of sentences
const sentenceCounter = checkPunctuations.length;

//word count
console.log('Word count: '+ wordCount);

//sentence count
console.log('Number of sentences: '+sentenceCounter);

//over used words count
console.log('Number of over used words: '+countOverUsedWords);

//Number of times each overused word was used. 
console.log(`Really was used ${really} times.`);
console.log(`Very was used ${very} times.`);
console.log(`Basically was used ${basically} times.`);

//complete paragraph
console.log(paragraph);






