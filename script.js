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
