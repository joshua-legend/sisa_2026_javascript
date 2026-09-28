/* 유저에게 div 갯수를 입력 받고 */
/* div의 안의 내용은 hello로 하고 */
/* 화면에 출력하기 */

const bg = ["red", "orange", "yellow", "green", "blue", "navy", "indigo"];
const user_count = +prompt("div 갯수 입력");
Array(user_count)
  .fill(0)
  .forEach((v, i) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = "안녕!";
    newDiv.style.backgroundColor = bg[i % 7];
    document.body.append(newDiv);
  });
