function display(x){
    document.getElementById('result').value=document.getElementById('result').vlaue+x;
    console.log('for checking')
}
function result(){
    var x=document.getElementById('result').vlaue
    var y=eval(x)
    document.getElementById('result').value=y 
}
function clearData(){
    document.getElementById('result').value=''
}
