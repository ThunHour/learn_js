var family={
    "hour":19,
    "huy":20,
    "mom":45,
    "Dad":58
};
console.log(family);
// There are three type to access the object : using dot notaion , using bracket notation and using variable notation

console.log(family.hour); //dot notation
console.log(family["huy"]); // breaket notation
// variable notation
var name_of_owner="Dad";
console.log(family[name_of_owner]);

// update object properties
family.mom=54;
console.log(family.mom)
//add object properties
family.sister=23;
console.log(family)

// delete object properties
 delete family.sister;
 console.log(family)