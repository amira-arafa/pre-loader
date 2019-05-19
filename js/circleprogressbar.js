var canvas=document.getElementById("mycanvas");
var context=canvas.getContext("2d");
context.beginPath();
context.arc(250,250,50,0,2*Math.PI);
context.stroke();
context.beginPath();
// context.fillStyle="white";
context.arc(250,250,40,0,2*Math.PI);
context.stroke();
context.beginPath();
context.arc(250,250,45,Math.PI/180*0,Math.PI/180*90,true );
context.lineWidth="13";
// context.arc(250,250,45,30,Math.PI/180*180 );
// context.lineWidth="13";
context.stroke();
context.font='15px Arial';
context.fillText("75%",240,255);
context.textAlign="center";

