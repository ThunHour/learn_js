function fun_calc(num1,num2,opearator) {
    var result = 0;
    switch (opearator) {
        case "*":
            {
            result += (num1 * num2)
        }{break};
        case "-":
            {
            result += (num1 - num2)
        }{break};
        case "+":
            {
            result += (num1 + num2)
        }{break};
        case "/":
            {
            result += (num1 / num2)
        }{break};
    }
    return `result:${result}`;
}

console.log(fun_calc(50,2,"*"));
console.log(fun_calc(50,2,"+"));
console.log(fun_calc(50,2,"-"));
console.log(fun_calc(50,2,"/"));