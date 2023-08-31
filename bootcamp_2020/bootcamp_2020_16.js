const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
readline.question("Enter a title",st=>{
    console.log(`<h1>${st}</h1>`);
})