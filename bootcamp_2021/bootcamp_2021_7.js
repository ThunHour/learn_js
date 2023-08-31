const readline =require("readline").createInterface({
    input: process.stdin,
    output : process.stdout
})
var sum_even=0,sum_odd=0;
readline.question("Input a number: ",num=>{
    if (isNaN(num)==false){
        for ( var i =0;i<=num;i++){
            if (i%2==0){
                sum_even+=i;
            }
            else{
                sum_odd+=i;
            };
        };
        console.log("Sum of odd number =",sum_odd);
        console.log("Sum of even number =",sum_even);

    }
    else{
        console.log("That is not a number")
    }
   
})