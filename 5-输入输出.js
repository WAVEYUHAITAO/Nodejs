import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
async function main() {
  const rl = readline.createInterface({ input, output });

  const name = await rl.question("What is your name?\n");
  const age = await rl.question("How old are you?\n");

  const birthYear = new Date().getFullYear() - age;

  const confirmation = await rl.question(
    `Welcome ${name}, your birthYear is ${birthYear}. right?(yes/no)\n`
  );

  if (confirmation.toLowerCase() === "yes") {
    console.log("Thank you for confirming!");
  } else {
    console.log("Please try again.");
  }
  rl.close();
}

main();
