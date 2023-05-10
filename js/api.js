import {showAlert} from './util.js';

const DATA_SERVER_TO_GET = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const DATA_SERVER_TO_SEND = 'https://27.javascript.pages.academy/kekstagram-simple';

export const getData = (onSuccess) => {
  fetch(DATA_SERVER_TO_GET)
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      showAlert('Data loading failed. Please, try again.');
    });
};

export const sendData = (onSuccess, onFail, data) => {
  fetch(
    DATA_SERVER_TO_SEND,
    {
      method: 'POST',
      body: data,
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => onFail());
};


