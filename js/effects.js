import { effects } from './data.js';

const uploadPreview = document.querySelector('.img-upload__preview');

let currentEffect = 'effects__preview--none';
//const TAG = 'effects';

const changeEffect = (evt) => {
  if (evt.target.id.slice(0, 7) === 'effect-') {
    const newEffectName = evt.target.id.slice(7);
    const newEffect = `effects__preview--${newEffectName}`;
    uploadPreview.classList.remove(currentEffect);
    uploadPreview.classList.add(newEffect);
    currentEffect = newEffect;
    uploadPreview.style.filter = effects[newEffectName];
  }
};


const removeEffect = () => {
  uploadPreview.classList.remove(currentEffect);
  uploadPreview.classList.add('effects__preview--none');
  uploadPreview.style.filter = '';
  currentEffect = 'effects__preview--none';
};

export { changeEffect, removeEffect };
