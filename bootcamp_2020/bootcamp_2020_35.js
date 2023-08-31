function dict_shopping(info_shopping){
    if (total_quan<=0||total<=0 || Object.keys(info_shopping[0]).length<=1){
        console.log(`('Invalid JSON',0)`);
    }
    else{
        var total=0;
        var total_quan=0;
        for (var i=0; i<info_shopping.length; i++){
            total+=Number(info_shopping[i]['price'])*Number(info_shopping[i]['quantity']);
            total_quan+=Number(info_shopping[i]['quantity']);
        }    
        console.log(`("${total}" ,${total_quan})`);
    }
}
dict_shopping([{"price" : 123.49, "quantity" : 3}]) 
dict_shopping([{"price" : 19.99, "quantity" : 3},
{"price" : 99.99, "quantity" : 6}]) 
dict_shopping([{"price" : 0.01, "quantity" : 999}]) 
dict_shopping([{"price" : 123.49, "quantity" : 0}]) 
dict_shopping([{"price" : -23.49, "quantity" : 2}]) 
dict_shopping([{"quantity" : 2}]) 
dict_shopping([{"price" : 99.99}]) 