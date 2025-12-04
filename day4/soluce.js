const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8");

const matrix = input.split("\n").map((line) => line.split(""));

let rolls = 0;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] !== "@") continue;
    let adjacentRolls = 0;

    if (j > 0) {
      if (matrix[i][j - 1] === "@") adjacentRolls++;
    }

    if (j < matrix[i].length - 1) {
      if (matrix[i][j + 1] === "@") adjacentRolls++;
    }

    if (i > 0) {
      if (j > 0) {
        if (matrix[i - 1][j - 1] === "@") adjacentRolls++;
      }

      if (matrix[i - 1][j] === "@") adjacentRolls++;

      if (j < matrix[i].length - 1) {
        if (matrix[i - 1][j + 1] === "@") adjacentRolls++;
      }
    }

    if (i < matrix.length - 1) {
      if (j > 0) {
        if (matrix[i + 1][j - 1] === "@") adjacentRolls++;
      }

      if (matrix[i + 1][j] === "@") adjacentRolls++;

      if (j < matrix[i].length - 1) {
        if (matrix[i + 1][j + 1] === "@") adjacentRolls++;
      }
    }

    if (adjacentRolls < 4) rolls++;
  }
}

console.log(rolls);
