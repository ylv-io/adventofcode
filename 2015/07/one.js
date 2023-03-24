const lines = require("fs")
  .readFileSync("input", "utf-8")
  .split("\n")
  .filter((str) => str !== "");

const operators = ["NOT", "AND", "OR", "RSHIFT", "LSHIFT"];

// define a function to parse the instructions and build the DAG
function buildDAG(instructions) {
  let dag = {};
  for (let i = 0; i < instructions.length; i++) {
    let instruction = instructions[i];
    let tokens = instruction.split(" ");

    let outputWire = tokens.pop();

    if (!dag[outputWire]) {
      dag[outputWire] = { inputs: [], operator: null, value: null };
    }

    if (tokens.length == 2) {
      let inputWire1 = tokens[0];
      dag[outputWire].inputs.push(inputWire1);
      dag[inputWire1] = dag[inputWire1] || {
        inputs: [],
        operator: null,
        value: null,
      };
    } else {
      if (operators.includes(tokens[0])) {
        let inputWire1 = tokens[1];
        let operator = tokens[0];
        dag[outputWire].inputs.push(inputWire1);
        dag[inputWire1] = dag[inputWire1] || {
          inputs: [],
          operator: null,
          value: null,
        };
        dag[outputWire].operator = operator;
      } else {
        let inputWire1 = tokens[0];
        let inputWire2 = tokens[2];
        let operator = tokens[1];
        dag[outputWire].inputs.push(inputWire1, inputWire2);
        dag[inputWire1] = dag[inputWire1] || {
          inputs: [],
          operator: null,
          value: null,
        };
        dag[inputWire2] = dag[inputWire2] || {
          inputs: [],
          operator: null,
          value: null,
        };
        dag[outputWire].operator = operator;
      }
    }
  }
  return dag;
}

// define a function to compute the value of a wire using DFS
function computeWireValue(dag, wire) {
  console.log("wire:", wire);
  if (dag[wire].value !== null) {
    return dag[wire].value;
  } else {
    if (dag[wire].inputs.length == 0) {
      console.log("wire:", wire);
      return wire;
    }
    let inputs = dag[wire].inputs.map((inputWire) =>
      computeWireValue(dag, inputWire)
    );
    let operator = dag[wire].operator;
    console.log("operator:", operator);
    console.log("inputs:", inputs);
    let output;
    if (operator == "NOT") {
      output = ~inputs[0];
    } else if (operator == "AND") {
      output = inputs[0] & inputs[1];
    } else if (operator == "OR") {
      output = inputs[0] | inputs[1];
    } else if (operator == "LSHIFT") {
      output = inputs[0] << inputs[1];
    } else if (operator == "RSHIFT") {
      output = inputs[0] >> inputs[1];
    } else {
      output = inputs[0]; // just a wire, no operator
    }
    dag[wire].value = output;
    console.log("output:", output);
    return output;
  }
}

let dag = buildDAG(lines);
console.log("dag:", dag);
console.log("dag[a]:", dag["a"]);
let outputValue = computeWireValue(dag, "a");
console.log('outputValue:', outputValue)
