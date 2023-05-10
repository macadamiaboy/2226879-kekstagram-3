//module with functions
const ALERT_SHOW_TIME = 10000;

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

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100px';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0px';
  alertContainer.style.top = '0px';
  alertContainer.style.right = '0px';
  alertContainer.style.padding = '20px 3px';
  alertContainer.style.fontSize = '40px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { customRandom, showAlert };
