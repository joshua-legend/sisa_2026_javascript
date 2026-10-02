// 비동기: 오래걸리는 작업들 [settimeout, 서버]
// fetch() Promise 리턴

// fetch("https://dummyjson.com/recipes")
//   .then((v) => v.json())
//   .then((v) => console.log(v));

const btn = document.querySelector("#btn");
const loader = document.querySelector(".loader");

btn.addEventListener("click", () => {
  loader.classList.remove("hidden");
  fetch("https://dummyjson.com/products")
    .then((v) => v.json())
    .then((v) => {
      const titles = v.products.map((x) => x.title);
      titles.forEach((x) => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = x;
        document.body.append(newDiv);
      });
      loader.classList.add("hidden");
    });
});
