const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
ctx.canvas.width = window.innerWidth
ctx.canvas.height = window.innerHeight

let particleArray = []
const colors = [
  'white',
  'rgba(255,255,255,0.3)',
  'rgba(173,216,230,0.8)',
  'rgba(211,211,211,0.8)'
]
const maxSize = 40
const minSize = 0
const mouseRadius = 60

// mouse position
let mouse = {
  x: null,
  y: null
}
window.addEventListener('mousemove',
  function(event) {
    mouse.x = event.x
    mouse.y = event.y
    console.log(mouse)
  }
)

// create constructor function for particle
function Particle(x, y, directionX, directionY, size, color) {
  this.x = x
  this.y = y
  this.directionX = directionX
  this.directionY = directionY
  this.size = size
  this.color = color
}

// add draw method to particle prototype
Particle.prototype.draw = function() {
  ctx.beginPath()
  ctx.arc(this.x, this.y, this.size, 0, MathPI * 2, false)
  ctx.fillStyle = this.color
  ctx.fill()
}
// add update method to particle prototype
Particle.prototype.update = function() {
  if (this.x + this.size*2 > canvas.width ||
      this.x - this.size*2 < 0) {
        this.directionX = -this.directionX
  }
  if (this.y + this.size*2 > canvas.height ||
      this.y - this.size*2 < 0) {
        this.directiony = -this.directionY
  }
      this.x += this.directionX
      this.y += this.directionY

}
