/* 클래스 [변수 + 함수]*/
/* 나만의 타입 만들기 */

class Coffee {
  #name;
  #price;
  #kcal;
  #shots;
  constructor(a, b, c, d) {
    this.#name = a;
    this.#price = b;
    this.#kcal = c;
    this.#shots = d;
  }
  info() {
    console.log(
      `커피 이름:${this.name} 커피 가격:${this.price} 커피 칼로리:${this.#kcal} 커피 샷:${this.#shots}`,
    );
  }
}

const a = new Coffee("오찬식커피", 2000, 5, 3);
a.info();
const b = new Coffee("이민욱커피", 3000, 150, 2);
b.info();
