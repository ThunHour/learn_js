const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("Enter a string :",st=>{
    if (st.length==0){
        console.log("The string is empty");
    }
    else{
        var length_string=st.length;
        console.log(length_string);
    }
})