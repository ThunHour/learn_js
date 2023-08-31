const readline=require("readline").createInterface({
    input:process.stdin,
    output: process.stdout
});
var sum_of_even=0;
readline.question("Input a number",num=>{
    if(isNaN(num)==false){
        for (var i =0;i<=num;i++){
            var random_num=Math.floor(Math.random()*(3001-2000)+2000)
                if (random_num%2==0){
                    sum_of_even+=random_num;
                };
        };
        console.log(`Sum of even random number : ${sum_of_even}`)
    }
    else{
        console.log("input is invalid");
    }
})