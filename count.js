const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
  console.log("increase 가 클릭되었습니다.");
  const current = parseInt(number.innerText, 10); //10진수로 숫자
  number.innerText = current + 1;
};

decrease.onclick = () => {
  console.log("decrease 가 클릭되었습니다.");
  const current = parseInt(number.innerText, 10); //10진수로 숫자
  number.innerText = current - 1;
};

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");

open.onclick = () => {
  console.log("모달을 보여줍니다.");
  modal.style.display = "flex";
};

close.onclick = () => {
  console.log("모달을 끕니다.");
  modal.style.display = "none";
};
