const palabrasOrdenar  = ['computadora', 'html'];
var aleatorio =  [Math.floor(Math.random() * palabra.length)];

function linea1(){
const c = document.getElementById("panel");
var ctx = c.getContext("2d");
ctx.moveTo(300, 0);
ctx.lineTo(300, 100);
ctx.stroke();
};

function cabeza(){ 
const c = document.getElementById("panel");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(195, 90, 70, 0, 2 * Math.PI);
ctx.stroke();
};

function cuerpo(){
    var c = document.getElementById("panel");
    var ctx = c.getContext("2d");
    ctx.moveTo(400, 0);
    ctx.lineTo(300, 190);
    ctx.stroke();
}

function brazo1(){
    var c = document.getElementById("panel");
    var ctx = c.getContext("2d");
    ctx.moveTo(230, 300);
    ctx.lineTo(300, 400);
    ctx.stroke();
}

function brazo2(){
    var c = document.getElementById("panel");
    var ctx = c.getContext("2d");
    ctx.moveTo(380, 300);
    ctx.lineTo(300, 400);
    ctx.stroke();
}


linea1();
cabeza();
cuerpo();   
brazo1();
brazo2();