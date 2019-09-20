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
