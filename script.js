const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 600;

// global variables
const cellSize = 100;
const cellGap = 3;
const gameGrid = [];

// game board
const controlsBar = {
  width: canvas.width,
  height: cellSize,
}
class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = cellSize;
    this.height = cellSize;
  }
  draw() {
    ctx.strokeStyle = 'black';
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
}
// projectiles
// defenders
// enemies
// resources
// utilities
function animate() {
  ctx.fillStyle = 'blue'
  ctx.fillRect(0, 0, controlsBar.width, controlsBar.height);
  requestAnimationFrame(animate);
}
animate();