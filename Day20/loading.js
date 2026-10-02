const loader = document.querySelector(".loader");
const image = document.querySelector(".image");

const load = () => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      loader.classList.add("hidden");
      image.classList.remove("hidden");
      success(true);
    }, 2000);
  });
};

load();

const a = 1;
const b = "100";

Number.isInteger(a);
Number.isNaN(b); // false
