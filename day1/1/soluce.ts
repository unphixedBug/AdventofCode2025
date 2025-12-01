const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

let pos = 50;
let zeroCount = 0;

for (const line of input) {
  const dir = line[0];
  const steps = Number(line.slice(1));

  switch (dir) {
    case "L":
      pos = (pos - steps) % 100;
      break;
    case "R":
      pos = (pos + steps) % 100;
      break;
  }

  if (pos < 0) {
    pos += 100;
  }

  if (pos === 0) {
    zeroCount++;
  }
}

console.log(zeroCount);
