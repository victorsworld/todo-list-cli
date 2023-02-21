const prompt = require('prompt-sync')({sigint:true});

let toDoList = [];
let toDoListCom = []
let userChoice = "";

    console.log("Welcome to the To-Do List Manager Application!\n");

    promptUser();

while(userChoice !== 5 ){

    if(userChoice === 1){
    let create = prompt("> ")
    toDoList.push(create)
        
    }else if(userChoice === 2){
    ChoiceTwo();

    }else if(userChoice === 3){
    ChoiceThree();
        
    } else if(userChoice === 4){
        ChoiceFour();
            
    }else{ console.log("Invalid Choice")}

    promptUser();
}
console.log("Exiting Applications")




                                        /*FUNCTIONS*/
function promptUser(){
    console.log("==============================================\n");
    if(toDoList.length === 0 && toDoListCom.length === 0){
        console.log("Your to-do list is empty.");
    } else if(toDoList.length >= 1 ||toDoListCom.length >= 1){ 
        console.log(`You have ${toDoList.length} to-do item(s) and ${toDoListCom.length} completed to-do item(s)`)
        let a = 0
        for (let i = 0; i < toDoList.length; i++){
            console.log(`${i + 1}. [Incomplete] ${toDoList[i]}`)
        } for(let i = toDoList.length ; i < toDoListCom.length + toDoList.length; i++){
            console.log(`${i + 1}. [Completed] ${toDoListCom[a]}`)
            a += 1
        }
    }

    console.log("\n~ Select an action ~");
    console.log("[1] Create a to-do item");
    console.log("[2] Complete a to-do item");
    console.log("[3] Edit a to-do item")
    console.log("[4] Delete a to-do item")
    console.log("[5] Exit to-do list")
    
    console.log(toDoList)
    console.log(toDoListCom)
   
    userChoice = Number(prompt("> "));

  
}

function ChoiceTwo(){
    console.log("\n ~Complete a to-do item~");
    console.log("Which to-do item would you like to complete?");
    userChoice = Number(prompt("> "));

        if(userChoice <= toDoList.length ){
        
        let a = toDoList.splice(userChoice -1, 1)
        
        toDoListCom.push(a[0])}
}

function ChoiceThree(){
    console.log("\n ~Which to-do item would you like to edit~");
    userChoice = Number(prompt("> "));
    if(userChoice <= toDoList.length ){
        
        let a = toDoList.splice(userChoice -1, 1)
        let b = prompt("enter to-do item: ")
        toDoList.push(String(b))}
}

function ChoiceFour(){
    console.log("\n ~Delete a to-do item~");
    console.log("Which to-do item would you like to delete?");
    userChoice = Number(prompt("> "));

        if(userChoice <= toDoList.length ){
        
        let a = toDoList.splice(userChoice -1, 1)
        }
}