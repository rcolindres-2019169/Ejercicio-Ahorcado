const palabrasOrdenar  = ['computadora', 'html'];


function linea1(){
var c = document.getElementById("panel");
var ctx = c.getContext("2d");
ctx.moveTo(300, 0);
ctx.lineTo(300, 100);
ctx.stroke();
}

function cabeza(){ 
var c = document.getElementById("panel");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(195, 90, 70, 0, 2 * Math.PI);
ctx.stroke();
}

linea1();
cabeza();
