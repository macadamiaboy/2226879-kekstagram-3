//data module

import {customRandom} from './util';

const PHOTOS_AMOUNT = 25;

const list = [];

const newPhoto = (index) => {
  return  {
    id: index,
    url: `photos/${index}.jpg`,
    description: 'It\'s me at Dubai and I\'m on my vacation right now',
    likes: customRandom(15, 200),
    comments: customRandom(0, 200),
  };
};

const fillTheList = () => {
  for (let i = 0; i < PHOTOS_AMOUNT; i++) {
    list.push(newPhoto(i));
  }
};

export {fillTheList};
