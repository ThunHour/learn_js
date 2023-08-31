function freezeObject(){
    const math_constant={
        PT:3.14
    }
    Object.freeze(math_constant);
    try {
        math_constant.PT=99;
    }
    catch(ex){
        console.log(ex);
    }
    return math_constant.PT;
}

console.log(freezeObject())