const movie = {
  name: "오디세이",
  director: "놀란",
  runningTime: 180,
  drink: "사이다",
};
const snack = { popcorn: "고소 팝콘", drink: "제로 콜라", side: "나초" };
const a = { ...movie, ...snack };
console.log(a);

const coffee = [
  { name: "아메리카노", price: 3000, shots: 2 },
  { name: "라떼", price: 3500, shots: 2 },
  { name: "연유라떼", price: 4000, shots: 2 },
];
// 가격 천원 더하고, 샷은 두배로 하기
coffee.map((x) => ({ ...x, price: x.price + 1000, shots: x.shots * 2 }));

const std = [
  { name: "오찬식", age: 29 },
  { name: "윤정은", age: 29 },
  { name: "이민욱", age: 26 },
];
std.map((x) => ({ ...x, age: x.age + 1 }));

const a1 = { name: "유희찬", age: 20 };
const a2 = { name: "김보민", gender: "female" };

const a3 = { ...a1, ...a2 }; // 김보민 , 20, female
const a4 = [1, 2, 3, 4, 5];
const a5 = [1, 2, 3, 4, 5];
const a6 = [...a4, ...a5];

const a7 = [..."kiwi"]
  .map((v) => (v == "i" ? "😂" : v))
  .reduce((a, c) => a + c); // k,😂,w,😂
