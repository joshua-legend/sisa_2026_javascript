const helloBtn = document.querySelector("#hello");
helloBtn.addEventListener("click", () => {
  setTimeout(() => {
    alert("ㅎㅇ!");
  }, 3000);
});

const nowBtn = document.querySelector("#now");
nowBtn.addEventListener("click", () => {
  setTimeout(() => {
    console.log(new Date().toISOString());
  }, 5000);
});
