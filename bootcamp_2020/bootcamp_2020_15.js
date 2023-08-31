const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
readline.question("Enter a number",num=>{
    for (var i=0;i<Number(num);i++){
        console.log(Math.floor(Math.random(0,2)*(2-0)+0));
    }
})