const strings = require("fs")
  .readFileSync("input", "utf-8")
  .split("\n")
  .filter((str) => str !== "");

function isNiceString(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  let hasDoubleLetter = false;
  let hasForbiddenSubstring = false;

  for (let i = 0; i < str.length; i++) {
    // Count vowels
    if (vowels.includes(str[i])) {
      vowelCount++;
    }

    // Check for double letter
    if (i > 0 && str[i] === str[i - 1]) {
      hasDoubleLetter = true;
    }

    // Check for forbidden substrings
    if (i > 0) {
      const substring = str.slice(i - 1, i + 1);
      if (
        substring === "ab" ||
        substring === "cd" ||
        substring === "pq" ||
        substring === "xy"
      ) {
        hasForbiddenSubstring = true;
      }
    }
  }
  return vowelCount >= 3 && hasDoubleLetter && !hasForbiddenSubstring;
}

let niceCount = 0;

for (let i = 0; i < strings.length; i++) {
  if (isNiceString(strings[i])) {
    niceCount++;
  }
}

console.log(niceCount);
