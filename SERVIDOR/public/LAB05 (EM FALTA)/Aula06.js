let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
//Parede da Casa
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#81491F';
ctx.strokeStyle = '#81491F';
ctx.fillRect (160,160,85,100);
ctx.strokeRect (160,160,85,100);
ctx.closePath();

//Janela 01
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#61BBFB';
ctx.strokeStyle = '#61BBFB';
ctx.fillRect (170,175,25,25);
ctx.closePath();

//Janela 02
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#61BBFB';
ctx.strokeStyle = '#61BBFB';
ctx.fillRect (210,175,25,25);
ctx.closePath();

//Porta
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#5F4525';
ctx.strokeStyle = '#5F4525';
ctx.fillRect (195,200,15,61);
ctx.closePath();

//Solo
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#808080';
ctx.strokeStyle = '#808080';
ctx.fillRect (0,260,400,300);
ctx.closePath();

//Sol
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#F9FF40';
ctx.strokeStyle = '#F9FF40';
ctx.arc(300,80,30,1.5*Math.PI,3.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//Telhado
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#EC6E52';
ctx.moveTo(159,159);
ctx.lineTo(246,159);
ctx.lineTo(202.5,120);
ctx.fill();
ctx.closePath();

//Tronco Arvore 1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#5F4525';
ctx.strokeStyle = '#5F4525';
ctx.fillRect (80,199,15,61);
ctx.closePath();

//Arvore 1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#3B892A';
ctx.strokeStyle = '#3B892A';
ctx.arc(88,180,20,1.5*Math.PI,3.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//Tronco Arvore 1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#5F4525';
ctx.strokeStyle = '#5F4525';
ctx.fillRect (350,250,15,61);
ctx.closePath();

//Arvore 1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#3B892A';
ctx.strokeStyle = '#3B892A';
ctx.arc(357,232,20,1.5*Math.PI,3.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//Cachoeira

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.arc(0,260,55,1.0*Math.PI,2.0*Math.PI);
ctx.fill();
ctx.closePath()

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.fillRect (0,260,55,140);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.fillRect (30,365,110,140);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.arc(134,400,35.5,1.0*Math.PI,2.0*Math.PI);
ctx.fill();
ctx.closePath()