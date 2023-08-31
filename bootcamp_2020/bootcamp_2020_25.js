function sort_set(num) {
    var reduced_duplicates = Array.from(new Set(num));
    var sort_num=reduced_duplicates.sort(function(a,b){return a-b})
    console.log(sort_num);
}
function sort_set_rev(num) {
    var reduced_duplicates = Array.from(new Set(num));
    var sort_num=reduced_duplicates.sort(function(a,b){return a-b}).reverse();
    console.log(sort_num);
}
sort_set([]) 
sort_set(['Hello'])
sort_set(['A', 'B', 'C', 'C', 'B']) 
sort_set([1, 5, 12, 5, 4]) 
sort_set_rev(['A', 'B', 'C', 'D', 'E']) 
sort_set_rev(['100', '100', '200', '300']) 
sort_set_rev([1, 5, 12, 5, 4]) 