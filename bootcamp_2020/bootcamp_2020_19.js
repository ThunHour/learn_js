const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
readline.question("Enter something:",st=>{
    if (st.length>2){
        console.log(st.slice(0,2).split("").reverse().join("")
        +st.slice(st.length-2,st.length).split("").reverse().join(""))
    }
    else if (st.length==2){
        console.log(st+st)
    }
    else if(st.length==1){
        console.log(st+st+st+st)
    }
    else if(st.length==0){
        console.log("0000")
    }
})