import { hideForm } from './forms.js';

const successTemplateElement = document.querySelector('#success').content.querySelector('.success');
const successMessageElement = successTemplateElement.cloneNode(true);
const successButton = successMessageElement.querySelector('.success__button');
const bodyElement = document.querySelector('body');

const onSuccessEscapeKeydown = (evt) => {
  if (evt === 'Escape') {
    evt.preventDefault();
    closeSuccessElement();
  }
};

const onSuccessBackDropClick = (evt) => {
  if (evt.target === successMessageElement) {
    closeSuccessElement();
  }
};

function closeSuccessElement () {
  document.removeEventListener('keydown', onSuccessEscapeKeydown);
  document.removeEventListener('click', onSuccessBackDropClick);
  successMessageElement.remove();
}

export const showSuccessModal = () => {
  hideForm();
  bodyElement.append(successMessageElement);
  document.addEventListener('keydown', onSuccessEscapeKeydown);
  document.addEventListener('click', onSuccessBackDropClick);
  successButton.addEventListener('click', closeSuccessElement);
};
