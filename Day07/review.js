const macdonald = [
  {
    name: "빅맥버거",
    price: 5500,
    kcal: 600,
    ingredients: ["bread", "lettuce", "tomato", "meat"],
  },
  { name: "콜라", price: 2000, kcal: 100, ingredients: ["soda"] },
  {
    name: "프랜치프라이",
    price: 3000,
    kcal: 300,
    ingredients: ["potato", "oil"],
  },
  {
    name: "상하이버거",
    price: 4500,
    kcal: 400,
    ingredients: ["bread", "lettuce", "chicken"],
  },
];

/* 1. 맥도날드 전체 총 칼로리 구하기 */
const totalKcal = macdonald.map((x) => x.kcal).reduce((a, c) => a + c);

/* 2. 칼로리 500이하 제품중에서 가격 총 합 구하기 */
const totalPrice = macdonald
  .filter((x) => x.kcal <= 500)
  .map((x) => x.price)
  .reduce((a, c) => a + c);
