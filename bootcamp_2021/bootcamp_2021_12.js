const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("Enter a string :",st=>{
    if (st.length==0){
        console.log("The string is empty");
    }
    else{
        var half=st.length/2;
        console.log(st.slice(0,half),st.slice(half,st.length));
    }
})