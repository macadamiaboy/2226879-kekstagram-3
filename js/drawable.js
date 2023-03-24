import {createPhotos} from './data';

const template = document.querySelector('#picture').content;
const photosContainerElement = document.querySelector('.photos_container');
const photosFragment = document.createDocumentFragment();

const photos = createPhotos();

photos.forEach(({url, description, likes, comments}) => {
  const currentPhoto = template.cloneNode(true);
  currentPhoto.querySelector('.picture__img').src = url;
  currentPhoto.querySelector('.picture__img').alt = description;
  currentPhoto.querySelector('.picture__info.picture__comments').textContent = comments;
  currentPhoto.querySelector('.picture__info.picture__likes').textContent = likes;
  photosFragment.appendChild(currentPhoto);
});

photosContainerElement.appendChild(photosFragment);
