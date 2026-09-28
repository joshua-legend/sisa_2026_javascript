// 데이터 타입
// string, number, boolean, undefined
// object, array, function

const recipe = (x) => {
  console.log("🥗요리 준비🥗");
  console.log("물끓이기");
  x();
  console.log("🍽️맛있게 먹기🍽️");
};
const ramen = (x) => {
  console.log("스프넣기");
  console.log("라면넣기");
  console.log("보글보글 끓이기");
};
const buldak = () => {
  console.log("면넣기");
  console.log("물버리기");
  console.log("스프 넣고 비비기");
};
const rice = () => {
  console.log("쌀넣기");
  console.log("뿔리기");
  console.log("기다리기");
};

recipe(ramen);
recipe(buldak);
recipe(rice);

const activateSkill = (skill) => {
  console.log("⚔️ 스킬 시전 준비 ⚔️");
  skill();
  console.log("🛡️ 시전 완료 🛡️");
};
const fire = () => {
  console.log("🔥 불의 기운");
};
const light = () => {
  console.log("⚡ 타겟 기운");
};
const ice = () => {
  console.log("🧊 날카로운 얼음");
};

activateSkill(ice);
activateSkill(fire);
