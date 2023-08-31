var constacts = [
    {
        "firstname": "China",
        "lastname": "Srun",
        "age": 18,
        "likes": ["genshin", "primos"],
    },
    {
        "firstname": "Hour",
        "lastname": "Seak",
        "age": 189,
        "likes": ["Hot dog", "chicken"],
    },
    {
        "firstname": "Seiha",
        "lastname": "Vong",
        "age": 19,
        "likes": ["apple", "banana"],
    },
    {
        "firstname": "Rith",
        "lastname": "Huot",
        "age": 20,
        "likes": ["oun", "ss"],
    },
]

function search(name,props) {
    for (var i = 0; i <constacts.length;i++) {
        if (constacts[i].firstname===name){
            return constacts[i][props] ||'No such constacts'; 
        }

    }
    return 'No such constacts';
}

console.log(search("Hour","likes"))

