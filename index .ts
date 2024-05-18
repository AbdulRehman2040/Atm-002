import inquirer from "inquirer";
interface ansType {
    userId: string,
    userPin: number
}
const answers: ansType = await inquirer.prompt([
      {
          type: "input",
          name: "userId",
          message: "kindly Enter your Id: "
      },
      {
        type: "number",
        name: "userPin",
        message: "Kindily Enter your Pin: "
      },
      {
        type: "list",
        name: "AccountType",
        Choices: [ "current", "saving"],
        message: "select your account type: ", 
      },
      {
        type: "list",
        name: "transactionType",
        Choices: ["fast cash", "withdraw"],
        message: "select your transaction",
        when(answers) {
            return answers.accountType
        },
      },
      {
        type: "list",
        name: "amount",
        Choices: [1000, 2000, 3000, 4000, 5000, 10000],
        message: "select your amount",
        when(answers) {
            return answers.transactionType == "fast cash"
        },
      },
      {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(answers) {
            return answers.transactionType == "withdraw"
        },
      },
         ])
         