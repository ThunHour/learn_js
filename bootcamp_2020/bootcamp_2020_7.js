const readline= require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
})
readline.question("Enter somthing",st=>{
    if (st.length==0){
        console.log("Nothing to display");
    }
    else{
        console.log(st[st.length-1]);
    }
})