function greet() {
  return "Hello World!";
}

function add(a, b) {
  return a + b;
}

document.getElementById("output").innerHTML =
  greet() + "<br>Sum: " + add(5, 3);
