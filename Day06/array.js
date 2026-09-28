// const arr = [2, 4, 6, 8, 10];
// const doubledArray = arr.map((x) => x * 2);

// const coffee = ["아메리카노", "라떼", "모카", "프라푸치노"];
// const test = coffee.map((x, i) => `${i}.${x}`);

// const students = [
//   { name: "김나단", age: 31 },
//   { name: "이민욱", age: 29 },
//   { name: "윤정은", age: 30 },
// ];
// const quiz1 = students.map((x, i) => {
//   x.no = i;
//   return x;
// });

// const company = [
//   { name: "씨엘제로", location: "오사카" },
//   { name: "라쿠텐", location: "도쿄" },
//   { name: "메루카리", location: "도쿄" },
// ];

// company.map((x, i) => {
//   x.no = `00${i + 1}`;
//   return x;
// });

/* 
  { no:001, name: "씨엘제로", location: "오사카" },
  { no:002, name: "라쿠텐", location: "도쿄" },
  { no:003, name: "메루카리", location: "도쿄" },
*/
const japanClass = [
  { name: "A반", level: "basic", students: ["오찬식", "이민욱", "윤정은"] },
  { name: "B반", level: "advanced", students: ["김나단", "김지원", "최강현"] },
];
const quiz2 = japanClass.map((x, i) => {
  x.no = i + 1;
  x.students = x.students.map((name, idx) => {
    return { name: name, no: idx + 1 };
  });
  return x;
});

const students = [
  {
    name: "윤정은",
    itBooks: ["html&css", "git&github", "javascript"],
    japaneseBooks: ["회화책", "문법책", "단어책"],
  },
  {
    name: "오찬식",
    itBooks: ["html&css", "git&github", "javascript"],
    japaneseBooks: ["히나가나", "가타가나", "단어책"],
  },
  {
    name: "이민욱",
    itBooks: ["html&css", "git&github", "javascript"],
    japaneseBooks: ["한문책", "출석책", "단어책"],
  },
];

students.map((x, i) => {
  x.no = `00${i + 1}`;
  x.itBooks = x.itBooks.map((bookname, bookIdx) => {
    return {
      name: bookname,
      no: `00${bookIdx + 1}`,
      bookLength: bookname.length,
    };
  });
  x.japaneseBooks = x.japaneseBooks.map((japbook) => {
    return { name: japbook };
  });
  return x;
});

/* 
{no:001, name:"윤정은", 
itBooks:[{name:"html&css",no:001, booksLength: 8}, {name:"git&github",no:002, booksLength: 10},{name:"javascript",no:003, booksLength: 10}], 
japaneseBooks:[{name:"회화책"},{name:"문법책"},{name:"단어책"}]},
*/
