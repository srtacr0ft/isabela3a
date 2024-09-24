const canvas = document.getElementById('paintCanvas');
const context = canvas.getContext('2d');
let painting = false;

function startPosition(e) {
  painting = true;
  draw(e);
}

function endPosition() {
  painting = false;
  context.beginPath();
}

function draw(e) {
  if (!painting) return;
  context.lineWidth = 5;
  context.lineCap = 'round';
  context.strokeStyle = 'black';

  context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  context.stroke();
  context.beginPath();
  context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);
