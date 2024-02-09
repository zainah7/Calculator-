function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  let displayValue = document.getElementById("display").value;
  let result = eval(displayValue);

  if (Number.isFinite(result)) {
    document.getElementById("display").value = result;
  } else {
    alert("Invalid expression");
    clearDisplay();
  }
}
