// 기본
// string, boolean, number, undefined
// 참조
// array, object, function, math, ?
// window, document, element

console.log(Math.PI); // 3.14???
console.log(Math.abs(-10)); // 절대값
console.log(Math.floor(3.14)); // 내림
console.log(Math.ceil(5.3)); // 올림
console.log(Math.random()); // 0 ~ 1 실수

const randomInt = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
