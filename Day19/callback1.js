/* 피자 만들기 */
/* 
1. 3초 [크러스트, 씬, ?]도우 만들기 
2. 2초 [토마토, 굴, ?]소스 바르기
3. 1초 [새우, 페퍼로니, ?]토핑 올리기
4. 1초 [파마산, 체다, 모짜렐라, ?]치즈 뿌리기
5. 5초 굽기
6. 1초 피자완성!
*/

const makeDough = (dough, step) => {
  setTimeout(() => {
    console.log(`${dough} 도우 만들기`);
    step();
  }, 3000);
};

const spreadSource = (source, step) => {
  setTimeout(() => {
    console.log(`${source} 소스 뿌리기`);
    step();
  }, 2000);
};

const addTopping = (topping, step) => {
  setTimeout(() => {
    console.log(`${topping} 토핑 올리기`);
    step();
  }, 1000);
};

const addCheese = (cheese, step) => {
  setTimeout(() => {
    console.log(`${cheese} 치즈 뿌리기`);
    step();
  }, 1000);
};

const bakeDough = (step) => {
  setTimeout(() => {
    console.log("굽기");
    step();
  }, 5000);
};

const makePizza = () => {
  setTimeout(() => {
    console.log("피자 완성");
  }, 1000);
};

/* callback hell */
makeDough("나폴리", () => {
  spreadSource("토마토", () => {
    addTopping("파인애플", () => {
      addCheese("블루치즈", () => {
        bakeDough(() => {
          makePizza();
        });
      });
    });
  });
});
