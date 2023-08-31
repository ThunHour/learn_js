const readline= require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
})
readline.question("Enter Number",st=>{
    for(var i=0;i<Number(st);i++){
        console.log("Hello World!");
    }
})