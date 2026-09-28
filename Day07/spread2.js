const fruits = [
  "apple",
  "pineapple",
  "banana",
  "peach",
  "kiwi",
  "orange",
  "mango",
  "strawberry",
];
/* aeiou를 "😊"로 바꾸기 */
/* 😊ppl😊 p😊n😊😊ppl😊 */

// apple -> [a,p,p,l,e] -> [😊,p,p,l,😊]
fruits.map((word) =>
  [...word]
    .map((spelling) =>
      [..."aeiou"].some((vowel) => vowel == spelling) ? "😊" : spelling,
    )
    .reduce((a, c) => a + c),
);
