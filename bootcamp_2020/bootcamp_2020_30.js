function int_list(num) {
    var list_count=[]
    for (var x of num) {
        if (typeof x == 'number'){
            if (Number.isInteger(x)){
                list_count.push(1)
            }
            else{
                list_count.push(0)
            }
        }
        else{
            list_count.push(0)
        }
    }
    if (list_count.includes(0) || list_count.length==0){
        console.log("False")
    }
    else{
        console.log("True")
    }
}

int_list([]) 
int_list([1, 2, 3]) 
int_list([1.5, 2, 2.0])
int_list([100, 200, 300, 400, 500])
int_list(['100', '100', '200', '300'])