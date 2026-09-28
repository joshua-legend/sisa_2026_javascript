class Character {
  #name;
  #hp;
  #maxHp;
  #power;

  constructor(name, maxHp, power) {
    this.#name = name;
    this.#hp = maxHp;
    this.#maxHp = maxHp;
    this.#power = power;
  }
  get name() {
    return this.#name;
  }
  get power() {
    return this.#power;
  }
  get hp() {
    return this.#hp;
  }
  set hp(v) {
    this.#hp = Math.max(0, Math.min(v, this.#maxHp));
  }
  attack(target) {
    target.hp -= this.#power;
    console.log(`${this.#name} -> ${target.name} 공격!`);
    console.log(`${this.#power} 데미지`);
    console.log(`남은 HP: ${target.hp}`);
  }
}

/* S2쩡은공듀S2 */
/* Warrior 클래스 만들기*/
/* 기본:150 공격력:20 파워스트라이크: 타켓의 HP의 절반 깎음 대신에 내체력 10깎임*/

/* #[접근제한] */
/* 원래 유지시키는게 맞음 */
/* 그대로 물려받음 */
class Warrior extends Character {
  constructor(name) {
    super(name, 150, 20);
  }
  powerstrike(target) {
    if (this.hp <= 10) {
      console.log(`${this.name} 체력이 부족해서 파워스트라이크 불가!`);
      return;
    }
    this.hp -= 10;
    target.hp -= target.hp / 2;
    console.log(`${this.name}의 파워스트라이크!`);
    console.log(`${this.name}의 남은 체력: ${this.hp}`);
  }
}

const a = new Warrior("S2쩡은공듀S2");
const b = new Warrior("돌아온 찬식이");

/* 회피율 */
const wolf = { name: "춤추는 늑대", hp: 100 };
const golem = { name: "든든한 골렘", hp: 1000 };

a.attack(wolf);
b.powerstrike(golem);

console.log({ wolf, golem });

/* Monster class 만들기 */
/* hp, name, power, attack(target)  */
class Monster {
  #name;
  #hp;
  #power;
  constructor(name, hp, power) {
    this.#name = name;
    this.#hp = hp;
    this.#power = power;
  }
  attack(target) {
    console.log(`${this.name}이 ${target.name} 공격!`);
    target.hp -= this.#power;
  }
}

class Wolf extends Monster {
  #dodgeRate;
  constructor(name) {
    super(name, 100, 15);
    this.#dodgeRate = 0.2;
  }
  dodge() {
    return Math.random() < this.#dodgeRate;
  }
}
