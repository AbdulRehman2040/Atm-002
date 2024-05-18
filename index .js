"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answers = await inquirer_1.default.prompt([
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
        Choices: ["current", "saving"],
        message: "select your account type: ",
    },
    {
        type: "list",
        name: "transactionType",
        Choices: ["fast cash", "withdraw"],
        message: "select your transaction",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        Choices: [1000, 2000, 3000, 4000, 5000, 10000],
        message: "select your amount",
        when(answers) {
            return answers.transactionType == "fast cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(answers) {
            return answers.transactionType == "withdraw";
        },
    },
]);
