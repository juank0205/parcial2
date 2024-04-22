let d = document.querySelector('canvas');
let ctx = d.getContext("2d");
d.height = 2000;
d.width = 2000;
d.style.height = '1000px';
d.style.width = '1000px';

let x=1300;
let y=1100;

ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x-400, y-200);
ctx.lineTo(x-200, y-500);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'red';
ctx.beginPath();
ctx.moveTo(x-400, y-200);
ctx.lineTo(x-600, y-700);
ctx.lineTo(x-200, y-500);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.moveTo(x-400, y-200);
ctx.lineTo(x-800, y-400);
ctx.lineTo(x-600, y-700);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'green';
ctx.beginPath();
ctx.moveTo(x-600, y-700);
ctx.lineTo(x-400, y-1000);
ctx.lineTo(x-200, y-500);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x+50, y-50);
ctx.lineTo(x-150, y-550);
ctx.lineTo(x-200, y-500);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'green';
ctx.beginPath();
ctx.moveTo(x-200, y-500);
ctx.lineTo(x-150, y-550);
ctx.lineTo(x-350, y-1050);
ctx.lineTo(x-400, y-1000);
ctx.closePath();
ctx.fill();
