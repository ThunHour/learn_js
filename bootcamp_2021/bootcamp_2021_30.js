function dict_value(dict){
    var list=[]
    for (let i of Object.keys(dict)){
        list.push(i);
    }
    for (let z=0;z<list.length;z++){
        console.log(list[z]+":",dict[list[z]].toString().replace(/,/g,' '));
        if (z<list.length-1){
            console.log('*'.repeat(50));
        }
    }
}
dict_value({120:["Visal","Borey","Sovann"], 
            130:["Hout","MouyLeng","pidor"], 
            140:["Nary","Misora","masaaki"]})