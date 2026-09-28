const menu = [
  { name: "블렌드 커피", price: 280 },
  { name: "아이스 코히", price: 380 },
  { name: "산도위치", price: 600 },
];

const rateSystem = {
  size: {
    s: 1,
    m: 1.1,
    l: 1.2,
  },
  membership: {
    yes: 0.9,
    no: 1,
  },
};

const selectNum = +window.prompt("도토루 메뉴 고르세요(1,2,3)");
const selectSize = window.prompt("사이즈 고르세요(s,m,l)");
const selectMemberShip = window.prompt("멤버쉽 존재 여부(yes,no)");

const finalPrice =
  menu[selectNum - 1].price *
  (rateSystem["membership"][selectMemberShip] || 1) *
  (rateSystem["size"][selectSize] || 1);

console.log(`주문하신 메뉴:${menu[selectNum - 1].name}, 가격: ${finalPrice}`);
