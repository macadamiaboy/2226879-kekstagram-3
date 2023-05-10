import { MIN_COMMENT_SIZE, MAX_COMMENT_SIZE } from './data.js';
import { sendData } from './api.js';

const form = document.querySelector('.img-upload__form');
const comment = document.querySelector('.text__description');
const uploadSubmitButton = document.querySelector('.img-upload__submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

const commentCheck = (text) => MIN_COMMENT_SIZE <= text.length && text.length <= MAX_COMMENT_SIZE;

pristine.addValidator(comment, commentCheck, 'Comment length shouldn\'t be less than 20 or more than 140 symbols');

/*const validator = () => {
  form.addEventListener('submit', (evt) => {
    const isValid = pristine.validate();
    if (!isValid) {
      evt.preventDefault();
    }
  });
};*/

const onSubmitForm = (success, fail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      uploadSubmitButton.disabled = true;
      sendData(
        () => {
          success();
          uploadSubmitButton.disabled = false;
        },
        () => {
          fail();
          uploadSubmitButton.disabled = false;
        },
        new FormData(evt.target)
      );
    }
  });
};

export { onSubmitForm };
