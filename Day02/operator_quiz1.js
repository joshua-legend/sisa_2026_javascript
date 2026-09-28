//1. 버스 요금 계산기
// 유저에게 나이를 물어보고, 버스요금도 입력받아서 결과값 나타내기
const age = Number(window.prompt("나이 입력"));
const bus_fee = Number(window.prompt("버스 요금 입력"));

const isGetFree = age <= 7;
const isGet70Percent = (8 <= age && age <= 19) || 65 <= age;
const discountRate = isGetFree ? 0 : isGet70Percent ? 0.7 : 1;
console.log(`나이: ${age} 버스요금:${bus_fee * discountRate}`);

//2. 사용자에게 10000 ~ 99999 사이 숫자를 입력받고
//각 자리의 합 나타내기, 단 위의 수를 벗어나면 오류! 나타내기
//ex) 12345 -> 15 , 43451 -> 17

const num = Number(window.prompt("10000 ~ 99999 입력"));

const isValid = 10000 <= num && num <= 99999;

const one = num % 10; // 5
const ten = ((num - one * 1) % 100) / 10; // 4
const hundred = ((num - ten * 10 - one * 1) % 1000) / 100; // 3
const thousand = ((num - hundred * 100 - ten * 10 - one * 1) % 10000) / 1000;
const ten_thousand =
  ((num - thousand * 1000 - hundred * 100 - ten * 10 - one * 1) % 100000) /
  10000;
console.log(isValid ? one + ten + hundred + thousand + ten_thousand : "오류!!");
