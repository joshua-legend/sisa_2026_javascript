// string, boolean, number, undefined
// obj, arr, func, math, date

const a = new Date();
console.log(a.getDate()); // 몇일
console.log(a.getDay()); // 0 ~ 6 (일-토)
console.log(a.getHours()); // 시
console.log(a.getMinutes()); // 분
console.log(a.getSeconds()); // 초
console.log(a.getTime()); // 1970년도에서 몇초 흐름 == 밀리초 타임스탬프 (날짜 차이 계산용)
