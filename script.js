const canvas = document.getElementById('drawTest1');
const ctx = canvas.getContext('2d');
const width = canvas.getBoundingClientRect().width;
const height = canvas.getBoundingClientRect().height;
//ctx.fillStyle = "green";
//ctx.fillRect(12,12,150,100)
const startx = (width/2)-1;
const starty = (height/2) - 1;
const radius = 50;//height / 3;
console.log(startx);
console.log(starty);
console.log(radius);
ctx.beginPath();
ctx.arc(startx, starty, radius, 0,Math.PI * 2);
//ctx.fillStyle = 'rgb(0,0,200,0.7)';
//ctx.fill();
ctx.stroke();
//ctx.closePath();

/*for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.beginPath();
        const x = 25 + j * 50; // x coordinate
        const y = 25 + i * 50; // y coordinate
        const radius = 20; // Arc radius
        const startAngle = 0; // Starting point on circle
        const endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
        const counterclockwise = i % 2 !== 0; // clockwise or counterclockwise

        ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    } */