#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let condition=true;


do{
let user_answer = await inquirer.prompt([{
name :"fr_cu",
message:"enter the currency you want to exchange from",
type:"list",
choices:["usd","eur","gbp","inr","pkr"]
},
{
  name :"to_cu",
  message:"enter the currency you want to exchange to",
  type:"list",
  choices:["usd","eur","gbp","inr","pkr"]
},
{
  name :"amount",
  message:"enter the amount you want to exchange",
  type: "number"
}
])


//for base currecy exchange rates
const currency:any = {
usd:1,
eur:0.91,
gbp:0.76,
inr:83.50,
pkr:278
};

let fromamount = currency [user_answer.fr_cu];
let toamount= currency [user_answer.to_cu];
let exchamount=user_answer.amount;

console.log(`currency:${user_answer.fr_cu} with Rate : ${fromamount}`);
console.log(`currency:${user_answer.to_cu} with Rate : ${toamount}`);
console.log(`amount to exchange is ${exchamount}`);


let baseamount= exchamount / fromamount;
let reqamount=baseamount*toamount;

console.log(`your exchangfed amount is ${reqamount}`);







//run again code
let user_run = await inquirer.prompt([
  {
    name: "run",
    message: "do you want to run again",
    type: "confirm",
  },]);
if (user_run.run === true) {
  condition = true;
} else {
  condition = false;
}
}while(condition)

