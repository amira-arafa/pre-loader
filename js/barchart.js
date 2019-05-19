var canvas=document.getElementById("mycanvas");
var context=canvas.getContext("2d");
// context.beginPath();
context.moveTo(50,50);
context.lineTo(50,450);
context.moveTo(50,450);
context.lineTo(450,450);
context.stroke();
// context.lineWidth="5";
var width=30;
var height=[100 ,120,300,70,150];
for(let line=0; line<(450-(25+line*20));line++){
        context.fillStyle="salmon";
        context.fillRect((50+50*line),(450-height[line]),width,height[line]);
    }
    
    // context.fillStyle="salmon";
    // context.fillRect(150,250,30,200);
    // context.fillStyle="salmon";
    // context.fillRect(200,150,30,300);
    // context.fillStyle="salmon";
    // context.fillRect(250,380,30,70);
    // context.fillStyle="salmon";
    // context.fillRect(300,300,30,150);

