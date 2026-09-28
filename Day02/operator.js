/* 복습 + a*/
// 1. input & output
// 2. variable
// 3. type: string("",'',``) number(), boolean[true/false]
// 4. type-casting:
//   * 문자화: String(?)
//   * 숫자화: Number(?)

/* operator.js */
/* 연산자가 무엇? */
/* 토큰(상징) */

/* 산술 연산자 */
const a1 = 1 + 2;
const a2 = 1 - 2;
const a3 = 1 * 3;
const a4 = 1 / 2;
const a5 = 2 ** 3; //제곱
const a6 = 4 % 3; // 나머지 result: 1

/* 대입 연산자 */
const b1 = true;
const b2 = "화요일";

/* 비교 연산자 (>,<,>=,<=,==) [boolean 저장됨] */
const c1 = 5 > 3; // true
const c2 = 5 < 3; // false
const c3 = 5 >= 3; // true
const c4 = 5 <= 3; // false
const c5 = 5 == 1; // false
const c6 = 5 != 1; // true

/* 논리 연산자 (&&[and], ||[or], ![not]) */
/* &&[and]: 하나라도 false 면 모두 false */
const d1 = 5 > 3 && 2 > 1 && 1 != 1; // false

/* ||[or]: 하나라도 true이면 모두 true */
const d2 = 5 > 3 || 2 > 1 || 1 != 1; // true

/* ![not] */
const d3 = !true; // false

/* 코딩 수학 필요? */
/* 드모르간 법칙 */
const d4 = 5 > 3 && 2 > 1;

/* 삼항 연산자 (?) */
const e1 = 5 > 3 ? "로제" : "마라";
const e2 = 5 < 3 ? "N1" : "N2";
const e3 = "윤정은" == "여신" ? 1 : 2;
