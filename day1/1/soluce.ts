const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

let pos = 50;
let zeroCount = 0;

for (const line of input) {
  const dir = line[0];
  const steps = Number(line.slice(1));

  for (let i = 0; i < steps; i++) {
    switch (dir) {
      case "L":
        pos = (pos - 1 + 100) % 100;
        break;
      case "R":
        pos = (pos + 1) % 100;
        break;
    }
    if (pos === 0) {
      zeroCount++;
    }
  }
}

console.log(zeroCount);
