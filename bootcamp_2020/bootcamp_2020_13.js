const readline= require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
})
readline.question("Enter a sentence:",st=>{
    console.log(st.replace("OOP","Object Oriented Programming").replace("FP","Functional Programming").replace("AI","Artificial Intelligence"
    ))
})