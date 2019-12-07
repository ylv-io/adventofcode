/*
--- Day 1: The Tyranny of the Rocket Equation ---
Santa has become stranded at the edge of the Solar System while delivering presents to other planets! To accurately calculate his position in space, safely align his warp drive, and return to Earth in time to save Christmas, he needs you to bring him measurements from fifty stars.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

The Elves quickly load you into a spacecraft and prepare to launch.

At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.

Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

For example:

For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
For a mass of 1969, the fuel required is 654.
For a mass of 100756, the fuel required is 33583.
The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

What is the sum of the fuel requirements for all of the modules on your spacecraft?

--- Part Two ---
During the second Go / No Go poll, the Elf in charge of the Rocket Equation Double-Checker stops the launch sequence. Apparently, you forgot to include additional fuel for the fuel you just added.

Fuel itself requires fuel just like a module - take its mass, divide by three, round down, and subtract 2. However, that fuel also requires fuel, and that fuel requires fuel, and so on. Any mass that would require negative fuel should instead be treated as if it requires zero fuel; the remaining mass, if any, is instead handled by wishing really hard, which has no mass and is outside the scope of this calculation.

So, for each module mass, calculate its fuel and add it to the total. Then, treat the fuel amount you just calculated as the input mass and repeat the process, continuing until a fuel requirement is zero or negative. For example:

A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.
At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.
What is the sum of the fuel requirements for all of the modules on your spacecraft when also taking into account the mass of the added fuel? (Calculate the fuel requirements for each module separately, then add them all up at the end.)

*/

const input = [
  95423,
  142796,
  88137,
  105610,
  79299,
  110633,
  136792,
  112578,
  75168,
  115615,
  147584,
  72145,
  108822,
  57753,
  96827,
  69117,
  131220,
  111193,
  120295,
  56240,
  111190,
  80740,
  137267,
  113183,
  126821,
  58966,
  63556,
  110977,
  100328,
  75367,
  57371,
  88235,
  134475,
  109071,
  92653,
  73347,
  135186,
  64534,
  81198,
  55423,
  100060,
  149555,
  110905,
  102826,
  129023,
  112618,
  146542,
  102579,
  67193,
  84258,
  60679,
  86674,
  124720,
  68719,
  55259,
  76421,
  70397,
  67998,
  73366,
  106401,
  59402,
  112481,
  131113,
  142606,
  107732,
  69291,
  61575,
  131019,
  51510,
  101215,
  116973,
  63530,
  146179,
  132427,
  127777,
  127040,
  143964,
  120340,
  144404,
  72156,
  96412,
  140554,
  60228,
  52590,
  128157,
  120444,
  125649,
  111641,
  117476,
  139326,
  149188,
  133599,
  55273,
  83773,
  50458,
  105166,
  76469,
  66681,
  84288,
  103708
];

function getFuel(mass) {
  return Math.floor(mass / 3) - 2;
}

function getAdjustedFuel(mass) {
  const base = Math.floor(mass / 3) - 2;
  return base > 0 ? getAdjustedFuel(base) + base : 0;
}

const totalFuel = input.map(getFuel).reduce((total, toAdd) => (total += toAdd));

console.log(totalFuel);

const totalAdjustedFuel = input
  .map(getAdjustedFuel)
  .reduce((total, toAdd) => (total += toAdd));

console.log(getAdjustedFuel(14) === 0);
console.log(getAdjustedFuel(1969) === 966);
console.log(getAdjustedFuel(100756) === 50346);

console.log(totalAdjustedFuel);
