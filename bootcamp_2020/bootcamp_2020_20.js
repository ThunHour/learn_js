const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
readline.question("Enter something:",st=>{
     if (st.length==0){
        console.log("EMPTY");
    }
    else{
        var list_word=''
        var st_split=st.split(" ").join("");
        var check_length =st_split.length
        for (var i=0; i<check_length; i++){
            for (var x=0; x<i+1; x++){
                if (x==0){
                    list_word+=st_split[i].toUpperCase(st_split[i]);
                }
                else if (x!=0){
                    list_word+=st_split[i].toLowerCase(st_split[i]);
                }
            }
            if(i !=check_length-1){
                list_word+='-'
            }
        }
        console.log(list_word);
    }

})