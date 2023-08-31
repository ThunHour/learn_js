const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
readline.question("Enter a number",num=>{
    if (isNaN(num)==false){
        if (Number(num)%2==0){
            console.log("EVEN");
        }
        else{
            console.log("ODD")
        };
        
    }
    else{
        console.log("Your input is not a number");
    }
})