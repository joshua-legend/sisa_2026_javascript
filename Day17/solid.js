/* 코드 이쁘게 만들어주는 원칙 */
/* SOLID 원칙 */
/* S - 단일 책임 원칙 */
/* 한 클래스/함수가 한 가지 일을 한다. */
class Receipt {
  constructor(items) {
    this.items = items;
  }
  getTotal() {
    return this.items.reduce((sum, i) => sum + i.price, 0);
  }
  print() {
    console.log(`합계: ${this.getTotal()}원`);
  }
  save() {
    localStorage.setItem("receipt", JSON.stringify(this.items));
  }
}

// ✅ 계산 / 출력 / 저장을 각자 담당
class Receipt {
  constructor(items) {
    this.items = items;
  }
  getTotal() {
    return this.items.reduce((sum, i) => sum + i.price, 0);
  }
}

class ReceiptPrinter {
  print(receipt) {
    console.log(`합계: ${receipt.getTotal()}원`);
  }
}

class ReceiptStorage {
  save(receipt) {
    localStorage.setItem("receipt", JSON.stringify(receipt.items));
  }
}

/* SOLID 원칙 */
/* O - 개방 폐쇄 원칙 */
/* 함부로 수정 하지마셈, 확장하셈*/
function pay(method, amount) {
  if (method === "card") console.log(`카드로 ${amount}원 결제`);
  else if (method === "kakao") console.log(`카카오페이로 ${amount}원 결제`);
  // 토스페이 추가? → 또 여기를 열어서 수정
}
const payments = {
  card: (amount) => console.log(`카드로 ${amount}원 결제`),
  kakao: (amount) => console.log(`카카오페이로 ${amount}원 결제`),
};

/* SOLID 원칙 */
/* L - 리스코프 원칙 */
/* 자식 클래스는 부모 클래스 자리에 넣어도 똑같이 동작해야 한다.*/
class Bird {
  fly() {
    console.log("날아간다");
  }
}
class Penguin extends Bird {}

/* SOLID 원칙 [소프트웨어 공학 내용]*/
/* I - 인터페이스 분리 원칙 */
/* Iphone - 배터리, 카메라, NFC */
/* 자동차 -  */
/* 니네들 클래스에 인터페이스 없이 여러 클래스 묶여있으면 */
/* A  - I - B 클래스  */
class EmailSender {
  send(msg) { console.log(`📧 이메일: ${msg}`); }
}
class KakaoSender {
  send(msg) { console.log(`💬 카카오톡: ${msg}`); }
}

class Notifier {
  constructor(sender) {   // send()만 있으면 뭐든 OK
    this.sender = sender;
  }
  notify(msg) { this.sender.send(msg); }
}

new Notifier(new EmailSender()).notify('주문 완료'); // 📧 이메일: 주문 완료
new Notifier(new KakaoSender()).notify('주문 완료'); // 💬 카카오톡: 주문 완료

/* SOLID 원칙*/
/* D - 의존성 역전 원칙 */
/* 저수준 모듈 먼저 만드셈 */
/* 자동차 - 바퀴,핸들,엔진,백미러,기어,시트,트렁크 */
/* 바퀴, 핸들, 엔진, 백미러, 기어, 시트, 트렁크 -> car */

/* todolist */
/* 1. 체크 on off */
/* 2. input 들어오냐? */


