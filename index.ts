#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to \'CodeWithSabi\' -ATM MACHINE\n");
let myBalance =10000;
let myPin= 1234;

let pinAnswer= await inquirer.prompt([
    {
    name: "pin",
    type: "number",
    message: "Enter your Pin Code: "
    }
])
if (pinAnswer.pin===myPin){
     console.log("Pin is correct, Login Successfully!");
    // console.log('Your current account Balance is: '+myBalance);

     let operationAns= await inquirer.prompt([
        {
        name: "operation",
        type: "list",
        message: "Select an operation: ",
        choices:["Withdraw Amount","Check Balance"]
        }
    ])
    if(operationAns.operation==="Withdraw Amount"){
        let amountAns= await inquirer.prompt([
            {
                name:"amount",
                type:"number",
                message:"Enter the amount to withdraw:"
            }
        ])
        let withdrawAmount= amountAns.amount;
        if(withdrawAmount>myBalance){
            console.log("insufficient Balance");
    
        }
        else{
            myBalance-=withdrawAmount;
            console.log(withdrawAmount +" withdraw successfully");
            console.log("Your remaining Balance is: " + myBalance);
        }

    }
    else if (operationAns.operation==="Check Balance"){
        console.log("Your Account Balance is: "+myBalance);
    }
}
else{
    console.log("Pin is incorrect, try again!");
}