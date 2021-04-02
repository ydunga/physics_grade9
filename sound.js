
var c = document.getElementById("canvas");

var ctx = c.getContext("2d");
init();
function plotSine(ctx, xOffset, yOffset) {
            var width = ctx.canvas.width;
            var height = ctx.canvas.height;
            var scale = 20;

            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "rgb(66,44,255)";

            // console.log("Drawing point...");
            // drawPoint(ctx, yOffset+step);
            
            var x = 4;
            var y = 0;
            var amplitude = parseInt(document.getElementById("frequency2").value);
            var frequency = 20;
            //ctx.moveTo(x, y);
            ctx.moveTo(x, 50);
            while (x < width) {
                y = height/2 + amplitude * Math.sin((x+xOffset)/frequency);
                ctx.lineTo(x, y);
                x++;
                // console.log("x="+x+" y="+y);
            }
            ctx.stroke();
            ctx.save();

            console.log("Drawing point at y=" + y);
           
            ctx.stroke();
            ctx.restore();
        }

 function draw() {
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");

            context.clearRect(0, 0, 500, 500);
          
            context.save();            
            
            plotSine(context, step, 50);
            context.restore();
            
            step += 2;
            window.requestAnimationFrame(draw);
        }

function init() {
            window.requestAnimationFrame(draw);
         
        }
        var step = -2;

        var context = new AudioContext, oscillator;

var setTone = function (val) {

  var multiplier = 13;  
  
	if (oscillator) {
    oscillator.stop();
  }
  
  oscillator = context.createOscillator();
  oscillator.frequency.value = val * multiplier
	oscillator.connect(context.destination);
  oscillator.start(0);

};

document.getElementById('tone').onchange = function (e) {
	setTone(e.currentTarget.value);
};
