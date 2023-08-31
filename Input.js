// how to input in java script
var readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Who are you?', name => {
  console.log(`Hey there ${name}!`);
  readline.question("what is your age?",age=>{
    console.log(`I am ${age}`)
    readline.question("Which batch are you in ?",batch=>{
        console.log(`I from SE batch ${batch}`)
        readline.close();
    });
     
});
});


