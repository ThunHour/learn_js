const readline= require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
})
readline.question("Enter somthing",st=>{
    if(st.length==0){
        console.log("Nothing To display");
    }
    else{
        console.log(st.split("").reverse().join(""));
    }
    
})