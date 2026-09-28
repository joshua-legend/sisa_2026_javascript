const colors = [
  "#123123",
  "#efe134",
  "#123890",
  "#928383",
  "#121184",
  "#1add23",
  "#efe134",
  "#eeef90",
  "#118383",
  "#123922",
  "#12ba23",
  "#bbe134",
  "#123890",
  "#921183",
  "#333984",
  "#1231aa",
  "#eeee34",
  "#1feff0",
  "#928311",
  "#124484",
];

const section = document.createElement("section");
section.style.cssText =
  "width:100vw;height:100vh;display:grid;grid-template-columns: repeat(5, 1fr);";

colors.forEach((x) => {
  const newDiv = document.createElement("div");
  newDiv.style.cssText = `width: 100%; height: 100%; background-color:${x}; display:flex;    justify-content: end; align-items:end;`;
  newDiv.innerHTML = x;
  section.append(newDiv);
});

document.body.append(section);
