const sum_sum=(function(){
    return function sum(...args){
        return args.reduce((a,b) => a+b, 0);
    };
})();

console.log(sum_sum(2,1,3,4,2)); 