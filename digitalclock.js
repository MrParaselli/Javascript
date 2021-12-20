window.onload()=function(){
alert('while loading webpage it will invoke')
getTime()
}
function getTime(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    document.getElementById('myTime').innerHTML=h+':'+m+':'+s+':'
    setTimeout(function(){
        console.log('Every Second it Prints')
        getTime()
},1000
}
setInterval(function() {
    console.log('Every Second it Prints')
    getTime()
},1000) 
