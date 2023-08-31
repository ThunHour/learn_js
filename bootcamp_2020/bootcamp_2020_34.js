function dict_search(dict,search){
    if (dict.hasOwnProperty(search)){
        console.log(dict[search]);
    }
    else{
        console.log(`ERROR:${search} key not found.`);
    }
   
}
info_students = {
    "username": "sabbe_k",
    "score": 100,
    "comments": "Good job!"}
dict_search(info_students, "username") 
dict_search(info_students, "score") 
dict_search(info_students, "comments")
dict_search(info_students, "email") 
dict_search(info_students, "phone_number")