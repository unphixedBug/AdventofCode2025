const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

let sum = 0;

for (const line of input) {
  const lineWithoutLastCharacter = line.slice(0, -1);

  const greatestFirstDigit = Math.max(
    ...lineWithoutLastCharacter.split("").map(Number)
  );

  const lineAfterFirstDigit = line.slice(line.indexOf(greatestFirstDigit) + 1);
  const greatestSecondDigit = Math.max(
    ...lineAfterFirstDigit.split("").map(Number)
  );

  const greatestNumber = Number(`${greatestFirstDigit}${greatestSecondDigit}`);
  sum += greatestNumber;
}

console.log(sum);
