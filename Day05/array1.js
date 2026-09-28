const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = arr.map((x) => x + 10);
console.log(newArr);

// 1. 홀수면 2배 짝수면 3배
const newArr1 = arr.map((x) => (x % 2 ? x * 2 : x * 3));
// 2. 각각 자기 수의 제곱
const newArr2 = arr.map((x) => x ** x);
// 3. 5의 배수만 "금요일" 바꾸기
const newArr3 = arr.map((x) => (x % 5 ? x : "금요일"));
