// write a function that returns true if all the words in the sentence in thr left hand parameter
// exist in the sentence in the right hand parameter
// and returns false otherwise
function harmlessRansomNote(noteText, magazineText) {
  let wordMap = {};
  let magazineMap = {};
  for (let word of noteText.split(' ')) {
    if (!wordMap[word]) {
      wordMap[word] = 1;
    } else {
      wordMap[word] += 1;
    }
  }

  for (let word of magazineText.split(' ')) {
    if (!magazineMap[word]) {
      magazineMap[word] = 1;
    } else {
      magazineMap[word] += 1;
    }
  }

  for (let word in wordMap) {
    const wordCount = wordMap[word];
    if (magazineMap[word] < wordCount) {
      return false;
    }
  }
  return true;
}

let note1 = 'this is a secret note for you from a secret admirier';
let note2 = 'this is a note for you from a secret admirier';

let magazine =
  'puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirier of but note that it is not as hard as it seems this is my advice for you';

console.log(harmlessRansomNote(note2, magazine));
