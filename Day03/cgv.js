/* CGV */
/* 좌석 선택: 일반(15000), 라이트(13000), 프리미엄(18000) */
/* 팝콘 선택: 일반(8000), 캬라멜(9000), 치즈(9000)  */
/* 음료 선택: 탄산(3000), 아이스티(2000), 커피(4500) */
/* 멤버쉽 선택: 브론즈[100%], 실버[90%], 골드[80%] */
/* 고르신 좌석:? ,팝콘:?, 음료:? 총 금액: ? */

const cgv = {
  seat: {
    standard: 15000,
    light: 13000,
    premium: 18000,
  },
  popcorn: {
    salt: 8000,
    caramel: 9000,
    cheese: 9000,
  },
  drink: {
    soda: 3000,
    icetea: 2000,
    coffee: 4500,
  },
  membership: {
    bronze: 1,
    sliver: 0.9,
    gold: 0.8,
  },
};

const user_seat = window.prompt(
  "좌석을 선택해 주세요(standard, light, premium",
);
const user_popcorn = window.prompt(
  "팝콘을 선택해 주세요(salt, caramel, cheese",
);
const user_drink = window.prompt("음료를 선택해 주세요(soda, icetea, coffee");
const user_memebership = window.prompt(
  "멤버를 선택해 주세요(bronze, sliver, gold",
);

const total =
  (cgv.seat[user_seat] + cgv.popcorn[user_popcorn] + cgv.drink[user_drink]) *
  cgv.membership[user_memebership];

console.log(
  `고르신 좌석:${user_seat},팝콘:${user_popcorn}, 음료:${user_drink} 총 금액: ${total}`,
);
