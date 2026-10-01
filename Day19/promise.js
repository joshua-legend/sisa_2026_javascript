/* 브라우저에서 오래걸리는 작업[비동기]: settimeout,setinterval */
/* 함수의 함수를 넣어서 순서 보장 */
/* callback hell  [2015 이전까지 이렇게 함]*/

/* 기본: string, number, boolean, undefined */
/* 참조: array, object, function, math, date, promise  <-> docu,window,event,element */

// const a = new Promise();
// a.then()

// Promise 타입
/* promise: 비동기의 작업을 성공 또는 실패를 알려주는 타입 */
// 성공,실패 매개변수로 가지는 함수 넣기!

// state: 성공, 진행중, 실패
// result: ?, --, ?
// const a = new Promise((success, fail) => {
//   setTimeout(() => {
//     fail({ source: "토마토", cheese: "파마산" });
//   }, 10000);
// });
// console.log(a);

// const b = new Promise((success, fail) => {
//   setTimeout(() => {
//     fail("치킨");
//   }, 3000);
// });
// console.log(b); // 프로미스 타입: state[진행중], result:없음
// b.then((x) => console.log(x));
// b.catch((x) => console.log(x));

/* 프로미스 타입을 이용해서 */
/* 2초 뒤에 성공 함수를 실행시켜서 "토마토" */
/* then 함수로 토마토 꿀맛! 알럿으로 출력하기 */

/* input, button 만들고 */
/* input 안의 내용을 넣고 버튼을 누르면 2초뒤에 알럿으로 ? 꿀맛! */
const c = (x) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(x);
    }, 2000);
  });
};

c("코끼리").then((x) => alert(x));

/* const content = document.querySelector("#content");
const button = document.querySelector("#button");
button.addEventListener("click", () => {
  const test = new Promise((success, fail) => {
    setTimeout(() => {
      success(content.value);
    }, 2000);
  });
  test.then((x) => alert(`${x} 꿀맛!`));
}); */
