const inputLines = require("fs")
  .readFileSync("input", "utf-8")
  .split("\n")
  .filter((str) => str !== "");

let lights = Array(1000)
  .fill()
  .map(() => Array(1000).fill(false)); // initialize all lights to false

for (let i = 0; i < inputLines.length; i++) {
  let words = inputLines[i].split(" ");
  let action, start_x, start_y, end_x, end_y;

  if (words[0] === "turn") {
    action = words[1];
    [start_x, start_y] = words[2].split(",").map(Number);
    [end_x, end_y] = words[4].split(",").map(Number);
  } else {
    action = words[0];
    [start_x, start_y] = words[1].split(",").map(Number);
    [end_x, end_y] = words[3].split(",").map(Number);
  }

  for (let x = start_x; x <= end_x; x++) {
    for (let y = start_y; y <= end_y; y++) {
      if (action === "on") {
        lights[x][y] = true;
      } else if (action === "off") {
        lights[x][y] = false;
      } else {
        // action === "toggle"
        lights[x][y] = !lights[x][y];
      }
    }
  }
}

let num_lights_on = lights.flat().filter((light) => light).length; // count the number of lights that are turned on
console.log(num_lights_on); // print the solution
