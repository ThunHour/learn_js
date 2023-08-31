const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
    })
readline.question("My name is BOT! what is your name?",name=>{
    console.log(`Nice to meet your ${name}! Good luck for BOOTCAMP!`)
})