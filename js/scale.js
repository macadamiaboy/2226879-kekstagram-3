const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const uploadPreview = document.querySelector('.img-upload__preview');

const INCREASE = 25;
const DECREASE = -25;
const MIN = 25;
const MAX = 100;
let scale = parseInt(scaleValue.value.replace('%', ''), 10);

const changeScale = (step) => {
  const newScale = scale + step;
  if (newScale >= MIN && newScale <= MAX) {
    scale = newScale;
    scaleValue.value = `${scale}%`;
    uploadPreview.style = `transform: scale(${scale / 100})`;
  }
};

const decrease = () => {
  scaleSmaller.addEventListener('click', () => {
    changeScale(DECREASE);
  });
};

const increase = () => {
  scaleBigger.addEventListener('click', () => {
    changeScale(INCREASE);
  });
};

const resetScale = () => {
  scaleValue.value = '100%';
  uploadPreview.style = 'transform: scale(1)';
};

export { decrease, increase, resetScale };
