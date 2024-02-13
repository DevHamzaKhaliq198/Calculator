import inquirer from "inquirer";
const answer:{
    firstnumber:number,
    secondnumber:number,
    operator:string,
}= await inquirer.prompt([
    {
name:"firstnumber",
type:"number",
message:"Enter first number"
},
{
    name:"secondnumber",
    type:"number",
    message:"Enter second number"
    },
    {
        name:"operator",
        type:"list",
        choices:["+","-","*","/"],
        message:"Choose an operator"
        }
])
const {firstnumber,secondnumber,operator}=answer;
if(firstnumber&&secondnumber&&operator){
    let result:number=0;
    if(operator==="+"){
       result=firstnumber+secondnumber;
    }
    else if(operator==="-"){
        result=firstnumber-secondnumber;
     }
     else if(operator==="*"){
        result=firstnumber*secondnumber;
     }
     else if(operator==="/"){
        result=firstnumber/secondnumber;
     }
     console.log(`your result is ${result}`);
     
}else{
    console.log("please! give valid inputs.");
    
}


