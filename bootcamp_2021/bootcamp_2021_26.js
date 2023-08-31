function search_tuple(element,num){
    if (element.includes(num)){
       console.log(`Element found at Index: ${element.indexOf(num)}`);
    }
    else{
        console.log("Element not found in the tuple")
    }
 }
 search_tuple([2,12,11,23,31],12);