interface StringMap {
  [key: string]: number;
}

// write a function that returns true if all the words in the sentence in thr left hand parameter
// exist in the sentence in the right hand parameter
// and returns false otherwise
function harmlessRansomNote(noteText: string, magazineText: string): boolean {
  const noteMap: StringMap = {};
  const magazineMap: StringMap = {};

  for (let word of noteText.split(' ')) {
    if (!noteMap[word]) {
      noteMap[word] = 1;
    } else {
      noteMap[word] += 1;
    }
  }

  for (let word of magazineText.split(' ')) {
    if (!magazineMap[word]) {
      magazineMap[word] = 1;
    } else {
      magazineMap[word] += 1;
    }
  }

  for (let word in noteMap) {
    let noteWordCount = noteMap[word];
    if (!magazineMap[word]) {
      return false;
    }
    if (magazineMap[word] < noteWordCount) {
      return false;
    }
  }
  return true;
}

let note1 = 'this is a secret note for you from a secret admirier';
let note2 = 'this is a note for you from a secret admirier';

let magazine =
  'puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirier of but note that it is not as hard as it seems this is my advice for you';

console.log(harmlessRansomNote(note1, magazine));
