const readline=require("readline").createInterface({
    input:process.stdin,
    output: process.stdout
});
readline.question("Input a sting :",st=>{
    console.log(st.toUpperCase(st));
})