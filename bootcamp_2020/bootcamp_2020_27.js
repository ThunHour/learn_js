function odd_even_list(num) {
    var num_list =[]
    for (var i = 0; i <num.length; i++) {
        if (num[i]%2 ==0){
            num_list.push('EVEN')
        }
        else if (num[i]%2 == 1){
            num_list.push('ODD');
        }
    }
    console.log(num_list);
}
odd_even_list([])
odd_even_list([1, 22, 111, 444]) 
odd_even_list([2, 11, 222, 333])
odd_even_list([1, 2, 3, 4, 555]) 