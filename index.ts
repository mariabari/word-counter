#! /usr/bin/env node

import inquirer from "inquirer";


const answer:{
    Sentence:"string" 
}=await inquirer.prompt({
    name:"Sentence",
    type: "input",
    message:"please enter your sentence or paragraph we count words:" 
})


const word = answer.Sentence.trim().split(" ")
console.log(`Your sentence word count is  ${word.length}`)


