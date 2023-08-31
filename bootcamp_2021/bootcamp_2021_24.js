function random_tuple(num){
    var tuple=[];
    var sum =0;
    for (var i = 1; i<=num;i++){
        var random_num=Math.floor(Math.random(100)*(100-0)+0);
        tuple.push(random_num);
        console.log(`Random number ${i}:${random_num}`);
        sum +=random_num;
    }
    console.log(`Tuple:(${tuple})`);
    console.log(`Sum :${sum}`);
}
random_tuple(5);