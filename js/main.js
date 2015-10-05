(function(){


window.setInterval(function(){
var time = new Date();
var hours=time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();
//var textNode;
var digit_min = (minutes <10) ? "0"+ minutes : minutes;
var digit_sec = (seconds < 10) ? "0" + seconds : seconds;
var currenttime = (hours + ":" +digit_min +":" + digit_sec);
//var textNode= document.createTextNode(currenttime);
$('.clock-body').text(currenttime);
},1000);


})();
