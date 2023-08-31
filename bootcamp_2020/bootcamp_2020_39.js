function gen_passwords(str,length,time) {
    var list=[];
    while(true){
        var word=''
        for (let x=0; x < length; x++) {
            var ran_word=Math.floor(Math.random()*(length)+0);
            if (ran_word>=str.length){
                let change_index=ran_word-str.length;
                word += str[change_index];
            }
            else if(ran_word<str.length) {
                word += str[ran_word];
            }
            
        }
        if (list.length===time) {
            break;
        }
        else if(list.includes(word)===false){
            list.push(word);
        }
    }
    return list;
}

console.log(gen_passwords('abc',3,2));
console.log(gen_passwords("abc", 3, 6));
console.log(gen_passwords("abc123", 5, 3));
console.log(gen_passwords("abc123", 8, 2));
console.log(gen_passwords("ABC_*&", 4, 4));