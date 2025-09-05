const readline = require('readline');
/*
The readline module is a core component of Node.js and is
It provides an interface for reading data line-by-line from an input stream, such as standard input or a file.
*/
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
// toDo Arrays 

const toDo=[];
const showMenu=()=>{
    console.log("\n 1: Add a task");
    console.log("\n 2: View  tasks");
    console.log("\n 3: pop task");
    console.log("\n 4: exit");
        // rl.question(query, callback) prompts the use and provide the response to a callback
    rl.question("choose and option: ",(e)=>{
        if(e==="1"){
            rl.question("enter the task :",(task)=>{
                toDo.push(task);
                console.log("task added",task);
                showMenu();

            }) 
        }else if(e ==="2"){
            console.log("your todos are: ")
            if(toDo.length ===0){
                console.log("no task yet!");
                
            }else{
                toDo.forEach((task,index)=>{
                    console.log(`${index+1}. ${task}`);
                });

            }
            showMenu();
        }else if(e==='3'){
            toDo.pop();
            showMenu();


        }
        else if(e === '4'){
            console.log("good bye: ");
            rl.close();

        }else{
            console.log("invalid input");
            showMenu();
        }
    });
    

};
// start the menu

showMenu();

