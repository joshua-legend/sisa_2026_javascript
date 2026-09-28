// const num = +window.prompt("숫자 입력");
// if (num > 0) {
//   console.log(`${num}은 0보다 큽니다.`);
// }
// console.log("프로그램 종료");

// const age = +window.prompt("몇살");
// if (age >= 20) {
//   console.log("성인이시군요!");
// } else {
//   console.log("미성년자 이시군요!");
// }
// console.log("프로그램 종료!");

const num = +window.prompt("정수 입력");
if (num > 0) {
  console.log("양의 정수");
} else if (num == 0) {
  console.log("0");
} else {
  console.log("음의 정수");
}
