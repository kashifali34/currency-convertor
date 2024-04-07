#! /usr/ bin/ env node
import inquirer from "inquirer";
const currancy = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let usser_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currancy",
        type: "list",
        choices: ["USD", "EUR", "GBP", "IMR", "PKR"],
    },
    {
        name: "to",
        message: "Enter from currancy",
        type: "list",
        choices: ["USD", "EUR", "GBP", "IMR", "PKR"],
    },
    {
        name: "amount",
        message: "Enter youre amount",
        type: "number"
    }
]);
let fromAmount = currancy[usser_answer.from];
let toAmount = currancy[usser_answer.to];
let amount = usser_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
