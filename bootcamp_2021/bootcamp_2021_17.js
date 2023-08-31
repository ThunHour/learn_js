const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("Input a string :",st=>{
    var last_cha=st.length
    console.log(`first Character:${st[0]}`)
    console.log(`Last Character:${st[last_cha-1]}`)
})