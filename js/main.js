//Идея функции рандома взята с https://learn.javascript.ru/
//В функциях random() и floor() разбирался на https://developer.mozilla.org/

const customRandom = function(from, to) {
  if (from < 0 || to < 0) {
    throw new Error('Arguments should be positive');
  }
  if (from > to) {
    [from, to] = [to, from];
  } else if (from === to) {
    return from;
  }
  const random = from + Math.random() * (to + 1 - from);
  return Math.floor(random);
};

const lengthCheck = (stringToCheck, maxLength) => stringToCheck.length <= maxLength;
lengthCheck('allowed', 7);

const list = [];

function newPhotos() {
  for (let i = 0; i < 25; i++) {
    list[i] = {
      id: i,
      url: `photos/${i}.jpg`,
      description: 'It\'s me at Dubai and I\'m on my vacation right now',
      likes: customRandom(15, 200),
      comments: customRandom(0, 200),
    };
    //console.log(list[i].id, list[i].url, list[i].description, list[i].likes, list[i].comments);
  }
}

newPhotos();
