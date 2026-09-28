const introduce_input = document.querySelector("#introduce_input");
const introduce_count = document.querySelector("#introduce_count");

introduce_input.addEventListener("input", (e) => {
  introduce_count.innerHTML = e.target.value.length;
});

const password_input = document.querySelector("#password_input");
const password_button = document.querySelector("#password_button");
password_button.addEventListener("click", () => {
  password_input.type = password_input.type == "text" ? "password" : "text";
  password_button.innerHTML =
    password_button.innerHTML == "보이기" ? "숨기기" : "보이기";
});
