/* function:마술상자(입력->출력) */
function makeCoffee(beans) {
  return beans + "산 아메리카노!";
}
function addTen(x) {
  return x + 10;
}
const a = makeCoffee("칠레");
console.log(a);

const b = addTen(100);
console.log(b); // 110;

/* 1. 어떠한 정수를 받으면 제곱해서 돌려주는 함수 만들기 */
function sqaure(x) {
  return x * x;
}
/* 2. 어떠한 과일이름 받으면 "땡땡 과일 주문" 이라는 함수 만들기 */
function orderFruit(fruit) {
  return `${fruit} 과일 주문`;
}
/* 3. 어떠한 학생이름 받으면 오브젝트로 name:이름 으로 돌려주는 함수 만들기 */
function makeObj(studentName) {
  return { name: studentName };
}
