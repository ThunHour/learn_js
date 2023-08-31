const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
readline.question("Enter something:",st=>{
    if (st.includes('#')){
        console.log(st.slice(0,st.indexOf('#')));
    }
    else{
        console.log(st);
    }
})