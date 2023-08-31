const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("Input a String :",st=>{
    for (var i=0;i<st.length;i++){
        console.log(st[i],':',st[i].charCodeAt(0));
    };
})