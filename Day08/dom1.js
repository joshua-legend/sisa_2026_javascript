// 유저한테 만들고 싶은 태그 묻고, 내용묻고 화면에 나타내기
// window, document, element[tag]

const newTag = document.createElement(prompt("만들고 싶은 태그"));
newTag.innerHTML = prompt("만들고 싶은 내용");
newTag.style.backgroundColor = "pink";

document.body.append(newTag);
