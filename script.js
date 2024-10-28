// FIRST ASSIGNMENT

function equalCheck(a, b) {
  if (a !== b) return "This is not equal";
  return "This is equal";
}

console.log(equalCheck(2, "2"));

function equalCheck(a, b) {
  if (a !== b) return "This is not equal";
  return "This is equal";
}

console.log(equalCheck(2, 2));

// SECOND ASSIGNMENT

function fahretToCelsius(temp) {
  if (typeof temp !== "number") return false;
  return (temp - 32) / 1.8;
}
console.log(fahretToCelsius(32));

function fahretToCelsius(temp) {
  if (typeof temp !== "number") return false;
  return (temp - 32) / 1.8;
}
console.log(fahretToCelsius("32"));

// THIRD ASSIGNMENT

function addNumbers(param1, param2) {
  return param1 + param2;
}

let result = addNumbers(5, 7);
console.log(result);
