// we use == for equal the value but not look strick on data type

function check(){
    if (3=='3'){
        return "Great job";
    }
    else{
        return "false";
    }
}

console.log(check());

// we use === for equal the value and look strick on data type

function check(){
    if (3==='3'){
        return "Great job";
    }
    else{
        return "false";
    }
}

console.log(check());