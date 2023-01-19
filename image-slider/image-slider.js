let currX = 0;

const wideImageDiv = document.getElementById("wide-image");

const addTranslationToStyle = (currX) => {
  wideImageDiv.style.transform = `translateX(${currX}vw)`;
  wideImageDiv.style.transition = "transform 330ms ease-in-out";
};
const next = () => {
  currX = (currX - 20) % 100;
  addTranslationToStyle(currX);
};

const prev = () => {
  currX = currX === 0 ? -80 : (currX + 20) % 100;
  addTranslationToStyle(currX);
};

const nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", next);

const prevBtn = document.getElementById("prev-btn");
prevBtn.addEventListener("click", prev);

const smallDotsArr = document.querySelectorAll(".small-dot");

const moveToImg = (event) => {
  currX = event.srcElement.index * -20;
  addTranslationToStyle(currX);
};

const updateFilledDot = (event) => {
  for (let i = 0; i < smallDotsArr.length; i++) {
    if (i !== event.srcElement.index) {
      smallDotsArr[i].classList.remove('selected-dot');
    } else {
      smallDotsArr[i].classList.add('selected-dot');
    }
  }
}

let i = 0;
smallDotsArr.forEach((smallDot) => {
  smallDot.index = i;
  i++;
  smallDot.addEventListener("click", (event) => {
    moveToImg(event);
    updateFilledDot(event);
  });
});
