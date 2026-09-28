/* 일반 함수 [구문법] */
function add(x, y) {
  return x + y;
}
/* 화살표 함수 [신문법] */
//데이터 타입
// 기본: string, number, boolean, undefined
// 참조: object, string, function
const add = (x, y) => {
  return x + y;
};
/* 화살표 함수 */
/* 1. a,b,c 를 입력받고 배열로 돌려주기 [a,b,c] */
const makeArray = (a, b, c) => {
  return [a, b, c];
};
/* 2. x,y를 받으면 합,차,곱,나누기,제곱을 오브젝트로 돌려주기 */
const calc = (x, y) => {
  return {
    sum: x + y,
    sub: x - y,
    multi: x * y,
    divided: x / y,
    square: x ** y,
  };
};
/* 입력 & 출력[공집합] */
const giveTen = () => {
  return 10;
};

const coin = (x) => {
  console.log("꺼억");
};
