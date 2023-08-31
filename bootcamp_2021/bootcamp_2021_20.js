const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
function en_de_code(){
    console.log("Press 1 to encode");
    console.log("Press 2 to decode");
    readline.question("Drop your choice: ",answer=>{
        readline.question("Enter the string to encode",en_answer=>{
                var en_string="";
                for (x of en_answer){
                    var plus_num=x.charCodeAt(0);
                    if (plus_num >64 && plus_num<77 || plus_num>96 && plus_num<109){
                        new_num=plus_num+13;
                        en_string += String.fromCharCode(new_num);
       
                    }
                    else if (plus_num >76 && plus_num<91 || plus_num>108 && plus_num<123){
                        new_num=plus_num-13;
                        en_string += String.fromCharCode(new_num);
                       
                    }
                }
                console.log(`Encode:${en_string}`);
                readline.question("Do you want to continue? [Y/N]",con_answer=>{
                    if (con_answer =="Y" || con_answer=="y"){
                        en_de_code()
                    }
                    else if (con_answer=="N"||con_answer=="n"){
                        console.log("Thanks GoodBye");
                        return readline.close();
                    }
                 })
        })

    })
}
en_de_code()
