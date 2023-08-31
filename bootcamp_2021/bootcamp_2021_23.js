function make_list(...args){
    list=[]
    for (x of args){
        list.push(x);
    }
    console.log(list);
};
make_list('hello',12,5);
