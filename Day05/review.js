/* Javascript */

// Input & Output

// Variables [const 별명 = 데이터]
// - 문법: 특수문자안됨(_,$), 숫자시작안됨, 예약어안됨(const, if, else, function, return)
// - 국룰: 의미있는 단어 짓기, 두 글자이상(카멜방식, 스네이크방식)

// Operator
// - 산술, 대입, 논리, 삼항, 비교

// data-type
// - 기본: string, number, boolean, undefined
// - 참조: object, array, function + window, console

// type-casting
// - 문자화: String, +
// - 숫자화: Number, +
// - 불리언화: Boolean, !

// 함수 [입출력, 마술 상자]
// - 일반 함수: fucntion 이름짓기(파라1, 파라2, 파라3, ...) { return }
// - 화살표 함수: const 별명 = (파라1,파라2,...) => {return }
// - 고차 함수: 함수 안에 함수 넣기

// 문자열의 함수
// "abcde".toUpperCase()

const happy = (x) => {
  console.log("금요일 행복");
  x();
  console.log("ㅎㅇㅌ");
};
const nadan = () => {
  console.log("김나단");
  console.log("조나단");
};
