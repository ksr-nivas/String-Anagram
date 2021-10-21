// Import stylesheets
import './style.css';

function stringAnagram(dictionary, query) {
  // Write your code here
  let countObject = {},
    anagramsCount = [];
  query.forEach((qItem) => {
    countObject[qItem] = 0;
    dictionary.forEach((dItem) => {
      if (isAnagram(dItem, qItem)) {
        console.log('anagram true');
        countObject[qItem]++;
      }
    });
  });
  console.log(countObject);
  for (var key in countObject) {
    anagramsCount.push(countObject[key]);
  }
  return anagramsCount;
}

function isAnagram(dString, qString) {
  if (dString.length !== qString.length) {
    return false;
  }
  for (var i = 0; i < qString.length; i++) {
    if (dString.indexOf(qString[i]) === -1) {
      console.log('return-false');
      return false;
    }
  }
  return true;
}

var dictionary = [
  'listen',
  'tow',
  'silent',
  'lisent',
  'two',
  'abc',
  'no',
  'on',
];
var query = ['two', 'bca', 'no', 'listen'];

console.log(stringAnagram(dictionary, query));

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
