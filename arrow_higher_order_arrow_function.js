const realNumberArray = [4,5.6,-9.8,3.14,42,6,8.34,-2];
const squareList=(arr)=> {
    const squaredInteger=arr.filter(num =>Number.isInteger(num)&& num>0).map(x => x*x);
    return squaredInteger;
}

const squaredInteger=squareList(realNumberArray);
console.log(squaredInteger);
