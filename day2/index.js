const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8").trim().split(",");

let invalidIDs = 0;

for (const range of input) {
  const [rangeStart, rangeEnd] = range.split("-").map(Number);
  for (let i = rangeStart; i <= rangeEnd; i++) {
    if (i.toString().length % 2 === 0) {
      const currentNumber = i.toString();
      const middleIndex = currentNumber.length / 2;

      const firstHalf = currentNumber.slice(0, middleIndex);
      const secondHalf = currentNumber.slice(middleIndex);

      if (firstHalf === secondHalf) {
        invalidIDs += i;
      }
    }
  }
}

console.log(invalidIDs);
