import inquirer from "inquirer";
import { Answers } from "inquirer";
let userId = Math.floor(Math.random() * 1000);
let pin = Math.floor(Math.random() * 1000);
inquirer
  .prompt([
    {
      name: "userId",
      type: "input",
      message: "Enter your user id",
    },
    {
      name: "pin",
      type: "password",
      message: "Enter your pin",
    },
    {
      name: "operation",
      type: "list",
      message: "Select the operation",
      choices: [
        "Withdraw",
        "Deposit",
        "Check account status",
        "Biometric verification",
        "account history",
      ],
      when: (answers: Answers) =>
        Number(answers.pin) === pin && Number(answers.userId) === userId,
    },
  ])
  .then((answers: Answers) => {
    if (answers.operation) {
      console.log("you performed the Operation :" + answers.operation);
    } else {
      console.log("Wrong user id or pin: Please try again.");
    }
  });
