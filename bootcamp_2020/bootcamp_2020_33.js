function dict_users(array){
    var list_dict=[]
    for (var i=0;i<array.length;i++){
        var dict={'username':'','ID':''}
        dict['username']=array[i];
        dict['ID']=i+1;
        list_dict.push(dict);
    }
    console.log(list_dict);
}
dict_users(["Akai", "Roger", "Fanny", "Diggie"])