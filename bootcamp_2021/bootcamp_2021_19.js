const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
var full_change="";
readline.question("Enter a string",st=>{
    for(let x of st){
        if (x == x.toLowerCase(x)){
            full_change+=x.toUpperCase(x);
          
        }
        else {
              full_change += x.toLowerCase(st);
        }
        };
        console.log(full_change);
    }
   
)