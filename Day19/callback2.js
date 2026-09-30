// 🥚🐣🐤🐔🍗
// 버튼 - 치킨만들기!
// 클릭하면
// 🥚[1~3]
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const egg = (next) => {
  setTimeout(
    () => {
      console.log("🥚");
      next();
    },
    getRandomInt(1, 3) * 1000,
  );
};

const hatch = (next) => {
  setTimeout(
    () => {
      console.log("🐣");
      next();
    },
    getRandomInt(2, 4) * 1000,
  );
};

const chick = (next) => {
  setTimeout(
    () => {
      console.log("🐤");
      next();
    },
    getRandomInt(2, 4) * 1000,
  );
};

const hen = (next) => {
  setTimeout(
    () => {
      console.log("🐔");
      next();
    },
    getRandomInt(3, 5) * 1000,
  );
};

const chicken = () => {
  setTimeout(
    () => {
      console.log("🍗");
    },
    getRandomInt(1, 3) * 1000,
  );
};

const chickenBtn = document.querySelector("#chicken");
chickenBtn.addEventListener("click", () => {
  egg(() => {
    hatch(() => {
      chick(() => {
        hen(() => {
          chicken();
        });
      });
    });
  });
});
