const readline=require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question("Do you know who is china from SE batch 9? : ",answer=>{
    if (answer=='yes' |answer=="Yes" |answer=="YES"){
      console.log("China is your friend");
                                                                        }
    else{
      console.log("China is not your friend");
        }
    readline.close();
  });
  