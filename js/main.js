//Идея функции рандома взята с https://learn.javascript.ru/
//В функциях random() и floor() разбирался на https://developer.mozilla.org/

import {createPhotos} from './data.js';
import {render} from './drawable.js';

const list = createPhotos();
render(list);
