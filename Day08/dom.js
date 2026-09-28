/* 타입 */
// 기본: string, boolean, number, undefined
// 참조: array, object, function + window(브라우저), document(HTML), element(Tag)

const btn = document.createElement("button");
btn.innerHTML = "오늘은 수요일";
document.body.append(btn);

const div = document.createElement("div");
div.innerHTML = "20260909";
document.body.append(div);

const h1 = document.createElement("h1");
h1.innerHTML = "js & html";
document.body.append(h1);
