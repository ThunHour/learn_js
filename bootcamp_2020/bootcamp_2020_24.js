function fun_sort(number){
    console.log(number.sort(function(a,b){return a-b}));
}
function fun_sort_rev(number){
    console.log(number.sort(function(a,b){return a-b}).reverse());
    //When comparing 40 and 100, the sort() method calls the compare function(40,100).
    //The function calculates 40-100, and returns -60 (a negative value).
    //The sort function will sort 40 as a value lower than 100.
}
fun_sort([])
fun_sort(['Hello'])
fun_sort(['A', 'B', 'C', 'D', 'E']) 
fun_sort([1, 5, 12, 5, 4])
fun_sort_rev(['A', 'B', 'C', 'D', 'E']) 
fun_sort_rev(['300', '100', '200', '400']) 
fun_sort_rev([1, 5, 12, 5, 4]) 