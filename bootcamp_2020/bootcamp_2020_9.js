const readline= require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
})
readline.question("Enter somthing",st=>{
    console.log(st.toUpperCase(st))
})