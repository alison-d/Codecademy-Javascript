let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//splits the story string into individual words
const storyWords = story.split(' ');
//console.log(storyWords.length);

//filters out the words in unnecessaryWords
const betterWords = storyWords.filter(function(word) {
 return !unnecessaryWords.includes(word)
});
//console.log(betterWords.length);

//counts instances of the words in overusedWords
let really = 0;
let very = 0;
let basically = 0;
for (word of storyWords) {
  if (word === 'really') {
    really++;
} else if (word === 'very') {
    very++;
} else if (word === 'basically') {
    basically++;
}
};
//console.log('REALLY: ' + really);
//console.log('VERY: ' + very);
//console.log('BASICALLY: ' + basically);

//counts how many sentences are in the paragraph
let sentences = 0;
for (sentence of storyWords) {
  if (sentence.includes('.') || sentence.includes('!')) {
    sentences++;
  }
};
//console.log('Number of sentences: ' + sentences);

//logs the word count, the sentence count & the number of times each overused word appears
console.log(storyWords.length);
console.log('Number of sentences: ' + sentences);
console.log('REALLY: ' + really);
console.log('VERY: ' + very);
console.log('BASICALLY: ' + basically);

//logs the betterWords array as a single string
console.log(betterWords.join(' '));
