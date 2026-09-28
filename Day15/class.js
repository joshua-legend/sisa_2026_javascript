/* OBJ - 변수 & 함수*/
/* class - 변수 & 함수*/
/* 중고차 판매 사이트 */
/* 
    가격[price], 연도[year], 주행거리[mileage], 사고유무[hasAccident], 침수여부[hasFlooding]
*/
class Car {
  price;
  year;
  mileage;
  hasAccident;
  hasFlooding;
  constructor(a, b, c) {
    this.price = a;
    this.year = b;
    this.mileage = c;
    this.hasAccident = false;
    this.hasFlooding = false;
  }
}

const a = new Car(10000, 2010, 10000);
console.log({ ...a });
const b = new Car(30000, 2000, 50000);
console.log({ ...b });

/* 클래스 - 변수 & 함수 */

class MedicalRecord {
  #visitedDate;
  #examine;
  #doctorName;
  constructor(a, b, c) {
    this.setVisistedDate(a); //  2026-09-18
    this.#examine = b;
    this.#doctorName = c;
  }
  setVisistedDate(a) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(a)) {
      throw new Error("해당 날짜는 유효하지 않습니다.");
    }
    const date = new Date(a);
    const today = new Date();
    if (today < date) {
      throw new Error("금일보다 미래 예약은 안됩니다.");
    }
    this.#visitedDate = date;
  }
}

class Vet {
  #name;
  #age;
  #species;
  #medical_records;
  constructor(a, b, c) {
    this.#name = a;
    this.setAge(b);
    this.#species = c;
    this.#medical_records = [];
  }
  setAge(age) {
    if (age < 0) {
      throw new Error("어떻게 나이가 음수냐 ㅋㅋ");
    }
    this.#age = age;
  }
  setMedical(a, b, c) {
    const medicalrecord = new MedicalRecord(a, b, c);
    this.#medical_records.push(medicalrecord);
  }
}
const choco = new Vet("초코", 8, "샴");
choco.setMedical("2026-09-15", "비만", "이보민");
choco.setMedical("2026-09-17", "감기", "김재희");
