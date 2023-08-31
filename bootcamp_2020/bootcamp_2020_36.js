function count(array_search,search) {
    var counter=0
    for (let i = 0; i < array_search.length; i++){
        if (array_search[i]==search){
            counter++;
        }
    }
    return counter
}
function dict_count(array) {
    if (array.length ==0){
        console.log({})
    }
    else{
        var list_item=[];
        var dict_tional={};
        for (var i=0; i<array.length; i++){
            if(list_item.includes(array[i])==false){
                list_item.push(array[i]);
            }
        }
        for (let k=0; k<list_item.length; k++) {
            dict_tional[`${list_item[k]}`]=count(array,list_item[k]);
        }
        console.log(dict_tional);
    }
}
dict_count([1,1,1,1,2,2,2,3,3,4,4,5]) ;
dict_count(["hey", "hi", "hi", "hi"]) ;
dict_count(["python", "python", "c++"]) ;
dict_count(["a", "b", "c", "d", "e"]) ;
dict_count([]) ;