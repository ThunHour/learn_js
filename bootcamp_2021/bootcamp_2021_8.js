const readline =require("readline").createInterface({
    input: process.stdin,
    output : process.stdout
})
var sum_even=0,sum_odd=0,even_count=0,odd_count=0;
readline.question("Input a number: ",num=>{
    if (isNaN(num)==false){
        for ( var i =0;i<=num;i++){
            if (i%2==0){
                sum_even+=i;
                even_count+=1
            }
            else{
                sum_odd+=i;
                odd_count+=1
            };
        };
        console.log("Average of odd number =",sum_odd/odd_count);
        console.log("Average of even number =",sum_even/even_count);

    }
    else{
        console.log("Invalid input");
    };
   
})