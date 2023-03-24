const strings = require("fs")
  .readFileSync("input", "utf-8")
  .split("\n")
  .filter((str) => str !== "");

  function isNiceString(str) {
    // Check for pair of letters that appears at least twice
    const pairRegex = /([a-z][a-z]).*\1/;
    if (!pairRegex.test(str)) {
      return false;
    }
  
    // Check for repeated letter with exactly one letter between them
    const repeatRegex = /([a-z]).\1/;
    if (!repeatRegex.test(str)) {
      return false;
    }
  
    // String is nice if it passes both tests
    return true;
  }

let niceCount = 0;

for (let i = 0; i < strings.length; i++) {
  if (isNiceString(strings[i])) {
    niceCount++;
  }
}

console.log(niceCount);
