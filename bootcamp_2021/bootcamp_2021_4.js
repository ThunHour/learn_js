const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
readline.question("input your name",name=>{
    readline.question("Enter number of time to display",time=>{
    for(var i =1; i<=time;i++){
        console.log(name);
    }
    readline.close
    })
})