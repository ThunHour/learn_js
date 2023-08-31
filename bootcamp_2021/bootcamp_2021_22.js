function fun_split(String_word){
    return String_word.split(" ")
}
console.log(fun_split("Hello world welcome to python"));

exercise_23
function make_list(...args){
    list=[]
    for (x of args){
        list.push(x);
    }
    console.log(list);
};
make_list('hello',12,5);
