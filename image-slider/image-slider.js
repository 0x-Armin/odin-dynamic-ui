let currX = 0;

const wideImageDiv = document.getElementById('wide-image');

const addTranslationToStyle = (currX) => {
  wideImageDiv.style.transform = `translateX(${currX}vw)`;
  wideImageDiv.style.transition = 'transform 330ms ease-in-out';
}
const next = () => {
  currX = (currX - 20) % 100;
  addTranslationToStyle(currX);
}

const prev = () => {
  currX = currX === 0 ? -80 : (currX + 20) % 100;
  addTranslationToStyle(currX);
}