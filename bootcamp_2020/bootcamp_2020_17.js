const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
var list=[]
function recorsive(){
readline.question("Enter a sentence:",st=>{
    if (st=='GENERATE'){
        print();
        return readline.close()
        
    }
    list.push(st);
    recorsive();
})
}
recorsive();
function print(){
    for (var i=0;i<list.length;i++){
        console.log(`<P>${list[i]}</P>`);
    }
}
