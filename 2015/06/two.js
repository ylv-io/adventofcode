const fs = require("fs");

// initialize the grid
const grid = [];
for (let i = 0; i < 1000; i++) {
  grid.push(new Array(1000).fill(0));
}

function processInstruction(instruction) {
  const parts = instruction.split(" ");

  let action = parts[0];
  let start = parts[1].split(",");
  let end = parts[3].split(",");
  if (parts[0] === "turn") {
    action = parts[1];
    start = parts[2].split(",");
    end = parts[4].split(",");
  } else {
    action = parts[0];
  }

  for (let i = parseInt(start[0]); i <= parseInt(end[0]); i++) {
    for (let j = parseInt(start[1]); j <= parseInt(end[1]); j++) {
      if (action === "toggle") {
        grid[i][j] += 2;
      } else if (action === "on") {
        grid[i][j] += 1;
      } else if (action === "off") {
        if (grid[i][j] > 0) {
          grid[i][j] -= 1;
        }
      }
    }
  }
}

// read the input file and process each instruction
const input = fs.readFileSync("input", "utf8");
const instructions = input.trim().split("\n");
for (let instruction of instructions) {
  processInstruction(instruction);
}

let brightness = 0;
for (let i = 0; i < 1000; i++) {
  for (let j = 0; j < 1000; j++) {
    if (grid[i][j]) {
      brightness += grid[i][j];
    }
  }
}

console.log(brightness);
