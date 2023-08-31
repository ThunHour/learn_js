const readline= require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
})
readline.question("Enter Number",st=>{
    for(var i=Number(st);i>=1;i--){
        console.log(i);
    }
    console.log("BOOM!")
})
