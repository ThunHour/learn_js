const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
var sum_of_odd=0,sum_of_even=0;
readline.question("Enter the number:",num=>{
    for (let i=0;i<=(num);i+=1){
        if(i %2 ==0){
            sum_of_even+=i;
        }
        else {
            sum_of_odd+=i;
        }
    
    }
    console.log(sum_of_even);
    console.log(sum_of_odd);
    readline.close;
})