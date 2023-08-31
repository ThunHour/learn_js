function list_number(num,num2,reverse=false) {
    var num_list =[]
    for(var i=num;i<=num2;i++) {
        num_list.push(Number(i));
    }
    if (reverse==true){
        console.log(num_list.reverse());
    }
    else if(reverse==false){
        console.log(num_list);
    }
    
}

list_number(1, 10) 
list_number(1, 10, reversed=true) 
list_number(1, 10, reversed=false) 
list_number(20, 25)
list_number(20, 25, reversed=true)