const palabrasOrdenar  = ['computadora', 'html'];


function linea1(){
var c = document.getElementById("panel");
var ctx = c.getContext("2d");
ctx.moveTo(500, 1000);
ctx.lineTo(500, 1000);
ctx.stroke();
}

function cabeza(){ 
var c = document.getElementById("panel");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
}

linea1();
cabeza();
