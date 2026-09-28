const tabs = document.querySelector(".tabs");

const tabsList = {
  info: "상세정보",
  title: "리뷰",
  qa: "문의",
};
const contents = {
  info: "면 100% · 국내 생산 · 30일 무료 반품",
  reviewList: [
    { stars: 5, reveiw: "배송 빨라요. 색도 사진이랑 똑같음." },
    { stars: 4, reveiw: " 사이즈가 살짝 큰 편이에요." },
  ],
  qa: "등록된 문의가 없습니다.",
};

Object.entries(tabsList).forEach((v) => {
  tabs.insertAdjacentHTML(
    "beforeend",
    `<button id="${v[0]}" class="tab">${v[1]}</button>`,
  );
});

Object.keys(tabsList).forEach((v) => {
  document.querySelector(`#${v}`).addEventListener("click", (e) => {
    document
      .querySelectorAll(".tab")
      .forEach((v) => v.classList.remove("active"));
  });
  document.querySelector(`#${v}`).addEventListener("click", (e) => {
    e.target.id == v && e.target.classList.add("active");
  });
});
