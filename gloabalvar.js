var globalVar = 20;
function firstFunction() {
  var localVar = 30;
  var localVar3 = globalVar + localVar;
  console.log(globalVar, localVar, localVar3);
}
function secondFunction() {
  var localVar2 = 50;
  var localVar4 = globalVar + localVar2;
  console.log(globalVar, localVar2, localVar4);
}
firstFunction();
secondFunction();
