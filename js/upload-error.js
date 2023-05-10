const errorTemplateElement = document.querySelector('#error').content.querySelector('.error');
const errorMessageElement = errorTemplateElement.cloneNode(true);
const errorButton = errorMessageElement.querySelector('.error__button');
const bodyElement = document.querySelector('body');
const editor = document.querySelector('.img-upload__overlay');


const onErrorEscapeKeydown = (evt) => {
  if (evt === 'Escape') {
    evt.preventDefault();
    closeErrorElement();
  }
};

const onErrorBackDropClick = (evt) => {
  if (evt.target === errorMessageElement) {
    closeErrorElement();
  }
};

function closeErrorElement () {
  document.removeEventListener('keydown', onErrorEscapeKeydown);
  document.removeEventListener('click', onErrorBackDropClick);
  errorMessageElement.remove();
}

const closeForm = () => {
  editor.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onErrorEscapeKeydown);
};

export const showErrorModal = () => {
  closeForm();
  bodyElement.append(errorMessageElement);
  document.addEventListener('keydown', onErrorEscapeKeydown);
  document.addEventListener('click', onErrorBackDropClick);
  errorButton.addEventListener('click', closeErrorElement);
};
