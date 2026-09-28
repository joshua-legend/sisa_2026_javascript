// setTimeout(() => {}, 3000);

const time = document.querySelector("#time");
time.innerHTML = new Date().toLocaleTimeString();
setInterval(() => {
  time.innerHTML = new Date().toLocaleTimeString();
}, 1000);
