/* operator_quiz.js */

//1.
const user_age = Number(window.prompt("몇살"));
const result1 = user_age >= 20 ? "성인" : "미성년자";
console.log(`귀하는 ${result1}입니다.`);

//2. 유저에게 정수(숫자)를 입력받고
// 콘솔에 양의 정수 인지 0인지 음의 정수인지 나타내기!
// ex) 10 -> 양의정수, -1 -> 음의정수, 0 -> 0
const num = Number(window.prompt("정수 입력"));
const reuslt2 = num > 0 ? "양의 정수" : num < 0 ? "음의 정수" : "0";

//3. 유저에게 정수(숫자)를 입력받고
// 콘솔에 홀수인지 짝수인지 나타내기!
// ex) 2 -> 짝수, 1 -> 홀수
const num1 = Number(window.prompt("정수 입력"));
const result3 = num % 2 == 1 ? "홀수" : "짝수";
