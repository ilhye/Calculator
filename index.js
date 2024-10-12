const buttonDiv = document.getElementById("button-container");

let result = document.getElementById("result");

function addButton() {
  let buttonLabels = [
    "7",
    "8",
    "9",
    "+",
    "5",
    "4",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "C",
    "0",
    "=",
    "/",
  ];

  for (let i = 0; i < 16; i++) {
    let button = document.createElement("button");

    button.id = `${i}`;
    button.textContent = buttonLabels[i];
    button.addEventListener("click", () => {
      buttonEvent(buttonLabels[i]);
    });

    buttonDiv.appendChild(button);
  }
}

function buttonEvent(label) {
  if (label === "C") {
    result.value = "";
  } else if (label === "=") {
    result.value = eval(result.value);
  } else {
    result.value += label;
  }
}

addButton();
