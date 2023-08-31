function initials(array) {
    var list_letter=[];
    for(let i=0; i<array.length; i++) {
        list_letter.push(array[i][0].toUpperCase());
    }
    console.log(list_letter);
}

initials(['World', 'Wide', 'Web'])
initials(['South', 'East', 'Asia'])
initials(['Good', 'luck', 'have', 'fun'])
initials([])