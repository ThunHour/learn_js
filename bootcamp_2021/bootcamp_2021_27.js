function mean_of_list(element){
    var num_element =0;
    for (x of element){
        num_element+=x;
    }
    var num=num_element/element.length;
    console.log(`Average of list:${num}`);
}
mean_of_list([50,10,62,32]);
