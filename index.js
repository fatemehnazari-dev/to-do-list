const input = document.querySelector("#inputItem");
const addbtn = document.querySelector("#addItem");
const list = document.querySelector("#listsItems");
const clearbtn = document.querySelector("#clearAll");

addbtn.onclick = function () {
  const value = input.value;
  const li = document.createElement("li");
  li.textContent = value;
  list.appendChild(li);
  input.value = "";
};

clearbtn.onclick = function () {
  list.innerHTML = "";
};
