const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
readline.question("Input a string",st=>{
    console.log(st.toLowerCase(st));
})
