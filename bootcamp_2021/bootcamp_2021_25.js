function sum_of_list(element){
    var sum_element = 0;
    for (x of element){
        sum_element += x;

    }
    console.log(`Sum of list :${sum_element}`)
}
sum_of_list([12,32,43,34,33,12]);
