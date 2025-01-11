const blockquoteList = document.querySelector(".blockquote__list");
const items = document.querySelectorAll(".blockquote__item");
let i = 0;
const lengthItems = items.length;
const lengthWidth = items[0].offsetWidth;

function showNextSlide() {
  i = (i + 1) % lengthItems; // Vòng lặp quay lại slide ban đầu
  blockquoteList.style.transform = `translateX(-${i * lengthWidth}px)`;
  setTimeout(showNextSlide, 5000);
}
export default setTimeout(showNextSlide, 5000);
