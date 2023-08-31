function list_to_lists(array) {
    var new_array = [];
    for (var i = 0; i < array.length; i++) {
        new_array.push(array[i].split('').reverse())
    }
    console.log(new_array);
}
list_to_lists(["Hello"]) 
list_to_lists(['A', 'a', 'B', 'b']) 
list_to_lists(["hello", "world"]) 
list_to_lists([]) 