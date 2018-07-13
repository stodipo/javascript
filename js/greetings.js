/*This script is used to send a greeting to the user based on the
system clock.*/
var today=new Date();
var hourNow=today.getHours();
var greetings;

if (hourNow>18){
	greeting='Good evening!';
}else if(hourNow>12){
	greeting='Good Afternoon!';
}else if(hourNow>0){
	greeting='Good Morning!';
} else {
	greeting='Welcome!';
}
document.write('<h3>'+ greeting +'</h3>');
//credits to JavaScript and jQuery book