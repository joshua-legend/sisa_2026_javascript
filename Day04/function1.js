function add(a, b, c) {
  return a + b + c;
}
const a = add(1, 2, 3); // 6

/* 1. x,y 를 받고 x의 y제곱을 돌려주는 함수 */
function square(x, y) {
  return x ** y;
}
/* 2. 메뉴이름과 가격을 받고 오브젝트로 돌려주는 함수 */
function makeMenuObj(name, price) {
  return { name: name, price: price };
}
makeMenuObj("규동", 10000); // {name:"규동",price:10000}

/* 3. x,y 를 받고 더 큰 수를 돌려주는 함수 */
function bigger(x, y) {
  return x > y ? x : y;
}
/* 4. r를 받고 원의 넓이와 둘레를 오브젝트로 돌려주는 함수 */
function circle(r) {
  return { width: r * r * 3.14, circum: 2 * r * 3.14 };
}
