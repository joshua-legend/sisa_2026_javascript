const banapresso = [
  { name: "아메리카노", price: 2000, shots: 2, kcal: 1 },
  { name: "크리미라떼", price: 3500, shots: 2, kcal: 200 },
  { name: "소금빵", price: 2000, kcal: 250 },
  { name: "피스타치오라떼", price: 4000, kcal: 300 },
];
/* 1. 가을 이벤트로 인해서, 각 가격 10% 할인된 데이터로 출력하기 */
const autumnEvent = (x) => {
  x.price = x.price * 0.9;
  return x;
};
const quiz1 = banapresso.map((x) => {
  x.price = x.price * 0.9;
  return x;
});
/* 2. 우유 이슈로 인해서, 라떼 품목들은 각 20% 금액 인상된 데이터로 출력하기 */
const quiz2 = banapresso.map((x) => {
  if (x.name.includes("라떼")) {
    x.price = x.price * 1.2;
  }
  return x;
});
/* 3. 빵 이슈로 인해서, 빵 품목들은 가격 절반으로 깍이고, 칼로리 100 추가하기 */
const quiz3 = banapresso.map((x) => {
  if (x.name.includes("빵")) {
    x.price = x.price * 0.5;
    x.kcal = x.kcal + 100;
  }
  return x;
});
/* 4. 신메뉴 "쩡으니라떼" 가격 5000 샷 2 칼로리 200 추가된 데이터로 출력하기 */
const quiz4 = banapresso.push({
  name: "쩡으니라떼",
  price: 5000,
  shots: 2,
  kcal: 200,
});
