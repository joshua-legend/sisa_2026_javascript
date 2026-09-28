/* 
1. 유저에게 정사각형의 한 변의 길이를 입력 받으면
   정사각형의 넓이:? 둘레:? 를 나타내기

2. 유저에게 원의 반지름의 길이를 입력 받으면
   원의 넓이:? 둘레:? 를 나타내기

3. 유저에게 정삼각형의 밑변과 높이를 각각 입력 받으면
   정삼각형의 넓이:? 둘레:? 를 나타내기

4. 유저에게 몇분인지 물어보고 초 단위로 변환하기

*/

const side = Number(window.prompt("정사각형의 한 변의 길이"));
console.log(`정사각형의 넓이:${side * side} 둘레:${side * 4}`);

const radius = Number(window.prompt("원의 반지름"));
console.log(`원의 넓이:${3.14 * radius * radius} 둘레:${2 * 3.14 * radius}`);

const base = Number(window.prompt("삼각형의 밑변 길이"));
const height = Number(window.prompt("삼각형의 높이 길이"));
console.log(`정삼각형의 넓이:${base * height * 0.5} 둘레:${base * 3}`);

const min = Number(window.prompt("몇 분"));
console.log(`${min}분 -> ${min * 60}초`);
