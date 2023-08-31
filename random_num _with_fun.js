function ourrandom(ourMin,ourMix){
    // return Math.floor(Math.random()*(ourMix-ourMin+1))+ourMin;
    return Math.floor(Math.random() * ourMix) + ourMin;
}

console.log(ourrandom(1,9));