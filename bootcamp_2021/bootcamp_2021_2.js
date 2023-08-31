const readline=require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Please input your name",name=>{
    console.log(`Greating,${name} and welcome to the javascript Bootcamp`);
    readline.close();
});