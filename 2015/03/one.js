const input = require("fs").readFileSync("input01", "utf-8");

function countHouses(input) {
  let x = 0,
    y = 0;
  let houses = new Set();
  houses.add(x + "," + y);

  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "^":
        y++;
        break;
      case "v":
        y--;
        break;
      case ">":
        x++;
        break;
      case "<":
        x--;
        break;
    }
    houses.add(x + "," + y);
  }

  return houses.size;
}

console.log(countHouses(input));
