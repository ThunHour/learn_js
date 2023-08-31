const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
readline.question("input a number",num=>{
    if (isNaN(num)===false){
        if (num%2 ==1){
            console.log("The number you have entered is odd");
        }
        else{
            console.log("The number you have entered is Even")
        };
    }
    else{
        console.log("Not a vaild number");
    };
})