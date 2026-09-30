/* 비동기 컨트롤 문법 */
/* 카페 주문 순서 */
/* 주문 -> 결제 -> 제조 -> 수령 */
// const orderCoffee = (menu, step) => {
//   setTimeout(() => {
//     console.log(`${menu} 주문 완료!`);
//     step();
//   }, 1000);
// };
// const payCoffee = (step) => {
//   setTimeout(() => {
//     console.log(`결제 완료!`);
//     step();
//   }, 2000);
// };
// const makeCoffee = (step) => {
//   setTimeout(() => {
//     console.log(`제조 완료!`);
//     step();
//   }, 5000);
// };
// const takeoutCoffee = () => {
//   setTimeout(() => {
//     console.log(`수령 완료!`);
//   }, 2000);
// };

// orderCoffee("라떼", () => {
//   payCoffee(() => {
//     makeCoffee(() => {
//       takeoutCoffee();
//     });
//   });
// });

/* 
비동기 참사
setTimeout(() => {
  orderCoffee();
}, 2000);
setTimeout(() => {
  payCoffee();
}, 1000);
setTimeout(() => {
  makeCoffee();
}, 5000);
setTimeout(() => {
  takeoutCoffee();
}, 3000); */

/* 커피 주문 프로세스 */
/* 주문 -> 결제 -> 제조 -> 수령 */

const order = (step) => {
  setTimeout(() => {
    console.log("커피 주문");
    step();
  }, 2000);
};
const pay = (step) => {
  setTimeout(() => {
    console.log("결제 완료");
    step();
  }, 1000);
};
const make = (step) => {
  setTimeout(() => {
    console.log("제조 완료");
    step();
  }, 5000);
};
const takeout = () => {
  setTimeout(() => {
    console.log("수령 완료");
  }, 2000);
};

order(() => {
  pay(() => {
    make(() => {
      takeout();
    });
  });
});
