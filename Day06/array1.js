/* map => 안에 요소들을 바꿔줘! */
// const arr = [1, 3, 5, 7, 9, 11];
// const a1 = arr.filter((x) => x > 6); // [7,9,11]
// const a2 = arr.filter((x) => 3 <= x && x <= 10);
// const a3 = arr.filter((x) => x % 3 == 0);
// const a4 = arr.filter((x, i) => i < 3);
// const fruits = ["apple", "pineapple", "banana", "kiwi", "melon", "mango"];
// const b1 = fruits.filter((x) => x.length >= 6);
// const b2 = fruits.filter((x) => x.includes("e")).map((x) => x.toUpperCase());

const students = [
  { name: "윤정은", age: 30, mbti: "ENFP" },
  { name: "오찬식", age: 29, mbti: "ESTJ" },
  { name: "이민욱", age: 26, mbti: "ISFJ" },
  { name: "오재희", age: 27, mbti: "ISTP" },
];
const quiz3 = students
  .filter((x) => x.age >= 29)
  .map((x) => {
    x.birthyear = 2027 - x.age;
    return x;
  });

const fruit = "apple";
fruit[0]; // a
fruit[4]; // e

// 2. MBTI 성향 I인 사람만 남기고, tendency: "내향적" 추가하기
const quiz4 = students
  .filter((x) => x.mbti[0] == "I")
  .map((x) => {
    x.tendency = "내향적";
    return x;
  });
