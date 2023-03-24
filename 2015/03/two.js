const input = require("fs").readFileSync("input01", "utf-8");

function deliverPresents(instructions) {
  let locations = new Set();
  let x = 0,
    y = 0,
    xR = 0,
    yR = 0;

  locations.add(`${x},${y}`);

  for (let i = 0; i < instructions.length; i++) {
    let direction = instructions[i];

    if (i % 2 === 0) {
      if (direction === "^") y++;
      else if (direction === "v") y--;
      else if (direction === ">") x++;
      else if (direction === "<") x--;
      locations.add(`${x},${y}`);
    } else {
      if (direction === "^") yR++;
      else if (direction === "v") yR--;
      else if (direction === ">") xR++;
      else if (direction === "<") xR--;
      locations.add(`${xR},${yR}`);
    }
  }

  return locations.size;
}

console.log(deliverPresents(input));
