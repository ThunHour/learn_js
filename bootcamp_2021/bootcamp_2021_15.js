const radline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
radline.question("Enter string",st=>{
    var half = st.length/2
    var first_half=st.slice(0,half)
    var second_half=st.slice(half,st.length);
    console.log(first_half.toLocaleUpperCase(first_half)+second_half);
})