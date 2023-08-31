const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
readline.question("Choose 1 to 4 you get 5 star character",answer=>{
    var userOption="";

    switch(Number(answer)){
        case 1:
            userOption="ZhongLi";
            break;
        case 2:
            userOption="Hu tao";
            break;
        case 3:
            userOption="KaZuHa";
            break;
        case 4:
            userOption="Baal";
            break;
        default:
            userOption="QIQI";
            break;
    };
    console.log(userOption.toUpperCase(userOption));
})