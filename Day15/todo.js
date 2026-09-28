/* todo 만들기 */
/* 할 내용, 완료여부, 데드라인 */
class Todo {
  #contents;
  #isDone;
  #deadline;
  constructor(contents, deadline) {
    this.#contents = contents;
    this.#isDone = false;
    this.#deadline = deadline;
  }
}

const a = new Todo("커피사기", "2026-09-19");
