/* 1. 유저에게 일본어 점수를 입력받고 */
/* 
100점 만점 중에 
90점 이상이면 A
80점 이상이면 B
70점 이상이면 C
60점 이상이면 D
그 외는 스미마셍
*/
const score = +window.prompt("일본어 점수 입력");
if (90 <= score && score <= 100) {
  console.log("A");
} else if (80 <= score && score < 90) {
  console.log("B");
} else if (70 <= score && score < 80) {
  console.log("C");
} else if (60 <= score && score < 70) {
  console.log("D");
} else {
  console.log("스미마셍");
}

const age = +window.prompt("몇살");
if (age < 7) {
  console.log("무료");
} else if (7 <= age && age <= 12) {
  console.log("5000원");
} else if (13 <= age && age <= 19) {
  console.log("10000원");
} else {
  console.log("15000원");
}
