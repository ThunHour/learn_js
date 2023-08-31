const readline=require("readline").createInterface({
    input:process.stdin,
    output: process.stdout
});
var sum=0;
function sum_num(){
    readline.question("Input number:",answer=>{
        if (answer === "stop"){
            console.log(`Sum: ${sum}`);
            return readline.close();
        }
        else if(answer.length ==0){
            console.log("you was not input a number");
        }
        else if (isNaN(answer)){
            console.log("The input must be a valid number!");
        }
        else{
            sum += Number(answer);
        }
        sum_num()
    })
}
sum_num()