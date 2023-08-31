const readline=require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("input your age",age=>{
    if (Math.sign(age)==1){
        if (age >= 18){
            console.log("You are eligible to vote");
        }
        else if (age <18){
            console.log("You aren't adult yet .... Sorry can't vote");
        }
        }
    
    else{
        console.log("Age must be a positive digit")
    }
})