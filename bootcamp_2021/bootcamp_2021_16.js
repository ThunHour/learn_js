const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("Input a string :",st=>{
    var half = st.length/2;
    var frist=st.slice(0,half);
    var reverse_frist=frist.split("").reverse();
    var join_frist=reverse_frist.join("");
    var second_half=st.slice(half,st.length);
    console.log(join_frist+second_half);
})