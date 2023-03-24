const dimensions = require("fs")
  .readFileSync("input01", "utf-8")
  .split("\n")
  .filter((str) => str !== "");

function wrappingPaperNeeded(dimensions) {
  let totalWrappingPaper = 0;

  for (const [l, w, h] of dimensions) {
    const surfaceArea = 2 * l * w + 2 * w * h + 2 * h * l;
    const slack = Math.min(l * w, w * h, h * l);
    totalWrappingPaper += surfaceArea + slack;
  }

  return totalWrappingPaper;
}

console.log(
  wrappingPaperNeeded(dimensions.map((d) => d.split("x").map(Number)))
);
