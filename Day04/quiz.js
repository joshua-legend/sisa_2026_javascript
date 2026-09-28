/* 유저에게 아이디 만들기 */

const id = window.prompt("아이디 입력");
const isNotValidLength = id.length < 4 || 12 < id.length;
const hasNotSpecialChar =
  !id.includes("@") && !id.includes("!") && !id.includes("#");
const isNotUpperWithStart3 = id.slice(0, 4) != id.slice(0, 4).toUpperCase();

if (isNotValidLength) {
  console.log("길이를 4 ~ 12 글자로 해주세요~!");
} else if (hasNotSpecialChar) {
  console.log("특수문자 @!# 중에 하나 포함해야해요!");
} else if (isNotUpperWithStart3) {
  console.log("0~3번째 글자는 대문자여야해요!");
} else {
  console.log("id 완성 쀼쀼");
}

/* email 검사 */

/* 1. @가 포함해야함 -> @를 포함해야합니다. */
/* 2. .net .com .co.kr로 끝나야함 -> .net/.com/.co.kr로 끝나야합니다! */
/* 3. 이메일이 모두 소문자여야함 -> 이메일은 소문자여야합니다. */
/* 4. 숫자 0~9 사이 하나 포함해야함 -> 숫자를 반드시 포함해야합니다. */
/* 이메일 통과! */
