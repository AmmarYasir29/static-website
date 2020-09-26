const huor = document.querySelector(".hour-hand");
const min = document.querySelector(".min-hand");
const sec = document.querySelector(".second-hand");

setInterval(() => {
  settime();
}, 1000);

const settime = () => {
  const date = new Date();
  const second = date.getSeconds();
  const secDegree = (second / 60) * 360 + 90;
  sec.style.transform = `rotate(${secDegree}deg)`;

  const mint = date.getMinutes();
  const minDegree = (mint / 60) * 360 + 90;
  min.style.transform = `rotate(${minDegree}deg)`;

  const hour = date.getMinutes();
  const hourdeg = (hour / 12) * 360 + 90;
  huor.style.transform = `rotate(${hourdeg}deg)`;
};
