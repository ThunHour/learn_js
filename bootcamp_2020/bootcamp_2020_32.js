function dict_info(first_name,last_name,email,phone){
    var dict = {"firstname":'',"lastname":'',"email":''};
    dict['firstname']=first_name[0].toUpperCase()+first_name.slice(1,first_name.length);
    dict['lastname']=last_name.toUpperCase(last_name);
    dict['email']=email;
    dict['phone']=phone;
    console.log(dict)

}
dict_info('hour','seak','seakkimhour@kit.edu.kh','0964968911')
dict_info ( " " , " " , " " , " " )