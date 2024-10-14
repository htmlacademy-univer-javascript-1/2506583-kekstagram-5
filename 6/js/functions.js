const checkLength = (string, maxLen) => (string.length <= maxLen);

checkLength("hhhhh", 3);
checkLength("hhhhh", 10);
checkLength("hhhhh", 5);

function isWordPalindrom(string){
  let stringWithoutSpaces = (string.replaceAll(" ", "")).toUpperCase();
  let newString = '';
  for (let i = stringWithoutSpaces.length - 1; i >= 0; i--){
    newString += stringWithoutSpaces[i];
  }
  let result = newString === stringWithoutSpaces;
  return result;
}

isWordPalindrom("тОпот");
isWordPalindrom("Д о в о д   ");
isWordPalindrom("Лёша на полке клопа нашёл ");

function convertToNumber(string){
  let stringWithoutSpaces = (string.replaceAll(" ", "")).split('');
  let newString = '';
  for (let i = 0;stringWithoutSpaces.length > i; i++){
    if (isInteger(stringWithoutSpaces[i])){
      newString += stringWithoutSpaces[i];
    }
    if (!(isInteger(stringWithoutSpaces[i]))){
      newString += '';
    }
  }
  return newString;
}


function isInteger(value) {
  return /^\d+$/.test(value);
}

convertToNumber('2023 год');
convertToNumber('1 кефир, 0.5 батона');
convertToNumber('ECMAScript 2022');
