function find_first(num,search) {
    if (num.includes(search)) {
        console.log(num.indexOf(search))
    }
    else{
        console.log('None')
    }
}
function find_all(num,search) {
    if (num.includes(search)) {
        var list_num=[];
        for (var i=0;i<num.length;i++) {
            if (num[i]==search) {
                list_num.push(i)
            }
        }
        console.log(list_num);
    }
    else{
        console.log('None');
    }

}

find_all([], 1) 
find_all(['Hello'], 'Bye') 
find_all(['A', 'B', 'C', 'C', 'B', 'C', 'C'], 'C') 
find_all([1, 5, 12, 5, 4], 5) 
find_first(['A', 'B', 'B', 'B', 'A'], 'B') 
find_first(['100', '100', '200', '300'], '100')