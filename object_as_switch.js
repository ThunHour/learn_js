var bank_account ={
    "seak kimhour":{
        "ID":"0011292",
        "Password":"88889999",
        "money":"500,000$"
    },
    "china":{
        "ID":"0922003",
        "Password":"dkjd393",
        "Money":"233,333,000.00$"
    }

}
var collection_account=JSON.parse(JSON.stringify(bank_account));
console.log(collection_account);
console.log(bank_account["seak kimhour"]);