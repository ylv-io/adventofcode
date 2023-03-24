const dimensions = require("fs")
  .readFileSync("input02", "utf-8")
  .split("\n")
  .filter((str) => str !== "");

function calculateRibbon(dimensions) {
  let ribbon = 0;
  for (let i = 0; i < dimensions.length; i++) {
    let sides = dimensions[i].split("x").sort((a, b) => a - b);
    ribbon += 2 * sides[0] + 2 * sides[1];
    ribbon += sides.reduce((a, b) => a * b);
  }
  return ribbon;
}

console.log(calculateRibbon(dimensions));
