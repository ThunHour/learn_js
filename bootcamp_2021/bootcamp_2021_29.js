function make_dictionary(list_element,list_word){
    var list=[]
    for (var i=0;i<list_element.length;i++){
        list.push(list_element[i]+`:`+`${list_word[i]}`)
    }
    var new_list=new Set(list)
    console.log(new_list)
}

make_dictionary([50,10,62],["borey","Thirak","dane"])