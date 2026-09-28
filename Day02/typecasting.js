/* typecasting.js  */
/* 
input & output
variable
datatype
- string, number, boolean
- String화: String()
- Number화: Number()
- Boolean화: Boolean()
operator
- 산술, 비교, 논리, 삼항, 대입
*/

// String <-> Number <-> Boolean

// truthy & falsy
// true: 아래 빼고 다
// false: 0, ""
const a = Boolean("스타벅스");
const b = Boolean("바나프레소");
const c = Boolean("메가커피");
const d = Boolean(1);
const e = Boolean(-1000);

// 명시적 타입캐스팅: Boolean(), Number(), String()
// 암묵적 타입캐스팅: !, +,
const test = !!1;
const test1 = !!0;

// 연산자: 산술, 비교, 논리, 삼항, 대입, 숫자화, 문자연결
const test2 = +"100"; //숫자화 연산자
const test3 = "로제" + "떡볶이"; //문자연결 연산자
const test4 = +"1" + +"2"; //3
const test5 = 1 + 2 + 3 + "4"; //64

// ||[or] &&[and]
const g = true && "야채" && "고기";
const g1 = false && "야채";
const g2 = false || "사이다";

const username = window.prompt("유저 이름 입력");
const nickname = username || "Guest";
console.log(nickname);

const password = +window.prompt("비밀번호 입력");
const isLoggined = password == 1234 && true;

/* 
- input & output
- variable
- type
 * String, Number, Boolean

- operator
 * 산술(+), 대입, 논리, 비교, 삼항,
 * 숫자화, 문자연결[문자화]

- typecasting
 * 문자화: String, +" "
 * 숫자화: Number, +
 * 불리언화: Boolean, !, 비교연산자


- truthy & falsy
 - falsy: 0, "", ...
 - truthy: 위에 빼고 다


*/
