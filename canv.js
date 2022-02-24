var canv = document.getElementById("mycanvas");
var ctx = canv.getContext("2d");
//background
ctx.fillStyle = "cyan";
ctx.fillRect(0, 0, canv.width, canv.height);
ctx.font = "15px Arial";
ctx.fillStyle = "blue";

//sun
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.arc(0, 0, 70, 0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath();
//clouds
ctx.fillStyle = "white";
ctx.arc(120, 10, 30, 0, Math.PI * 2, true);
ctx.arc(150, 20, 30, 0, Math.PI * 2, true);
ctx.arc(180, 10, 30, 0, Math.PI * 2, true);

ctx.arc(240, 10, 30, 0, Math.PI * 2, true);
ctx.arc(270, 20, 30, 0, Math.PI * 2, true);
ctx.arc(300, 10, 30, 0, Math.PI * 2, true);

ctx.arc(360, 10, 30, 0, Math.PI * 2, true);
ctx.arc(390, 20, 30, 0, Math.PI * 2, true);
ctx.arc(420, 10, 30, 0, Math.PI * 2, true);
ctx.fill();
//house
ctx.fillStyle = "brown";
ctx.fillRect(110, 130, 250, 150);
ctx.fillStyle = "white";
//roof
ctx.beginPath();
ctx.moveTo(110, 130);
ctx.lineTo(235, 50);
ctx.lineTo(360, 130);
ctx.fill();
//windows
ctx.fillStyle = "white";
ctx.fillRect(120, 150, 40, 50);
ctx.fillRect(310, 150, 40, 50);

//door
ctx.fillStyle = "black";
ctx.fillRect(215, 200, 40, 100);

//my fence
let x = 45;
ctx.fillStyle = "white";
for (let i = 45; i < 430; i += 30) {
  ctx.fillRect(i, 250, 30, 120);
  //triangles
  ctx.beginPath();
  ctx.moveTo(i, 250);
  ctx.lineTo(i + 15, 230);
  ctx.lineTo(i + 30, 250);
  ctx.fill();
}
//lines for fence
for (let f = 75; f < 430; f += 30) {
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(f, 250);
  ctx.lineTo(f, 300);
  ctx.stroke();
}

//ground color
ctx.fillStyle = "gray";
ctx.fillRect(0, 295, 45, 20);
ctx.fillRect(435, 295, 80, 20);

//background text
ctx.fillText("Hello, this is my cartoon!", 10, 100);
