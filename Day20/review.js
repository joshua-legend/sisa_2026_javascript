// Quiz
// 피자 만들기
// 도우[3] -> 소스[2] -> 토핑[2] -> 치즈[1] -> 굽기[3] -> 피자완성![2]
// 프로미스 타입을 이용해서 만들기!

const makeDough = (dough) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(`${dough} 도우 만들기`);
    }, 3000);
  });
};

const makeSource = (source) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(`${source} 소스 뿌리기`);
    }, 2000);
  });
};

const addTopping = (topping) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(`${topping} 토핑 뿌리기`);
    }, 2000);
  });
};

const addCheese = (cheese) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(`${cheese} 치즈 뿌리기`);
    }, 1000);
  });
};

const bakePizza = () => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(`피자 굽기`);
    }, 3000);
  });
};

const makePizza = () => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(`피자 완성`);
    }, 2000);
  });
};

makeDough("씬")
  .then((x) => {
    console.log(x);
    return makeSource("토마토");
  })
  .then((x) => {
    console.log(x);
    return addTopping("새우");
  })
  .then((x) => {
    console.log(x);
    return addCheese("파마산");
  })
  .then((x) => {
    console.log(x);
    return bakePizza();
  })
  .then((x) => {
    console.log(x);
    return makePizza();
  })
  .then((x) => console.log(x));
