var globalVar=20;
function firstFunction()
{
    var localVar=30;
    console.log(globalVar, localVar)
}
function secondFunction()
{
    var localVar2=50;
    console.log(globalVar, localVar2)
    }
    firstFunction()
    secondFunction()