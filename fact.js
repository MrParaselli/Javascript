var factorial = function computefact(Number)
{
    if(Number<=1)
    {
        return 1;
    }
else {
    return Number*computefact(Number-1)
}
}
var factResult=factorial(6)
console.log(factResult)
