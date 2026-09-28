const calendar = document.querySelector("#calendar");
const dateText = document.querySelector("#dateText");

calendar.addEventListener("input", (e) => {
  const { value } = e.target;
  const [year, month, date] = value.split("-"); // [2026,09,02]
  dateText.innerHTML = `${year}년 ${month}월 ${date}일`;
});
