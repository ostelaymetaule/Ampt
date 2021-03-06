var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var clrBtn=  document.getElementById("btClear");
    init();
    function init() {
        // ...
        // Attach the mousemove event handler.

        canvas.addEventListener('mousemove', ev_mousemove, false);
        
    }

    function clearPic(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
    // The mousemove event handler.
    var started = false;
    function ev_mousemove(ev) {
        var x, y;

        // Get the mouse position relative to the canvas element.
        if (ev.layerX || ev.layerX == 0) { // Firefox
            x = ev.layerX;
            y = ev.layerY;
        } else if (ev.offsetX || ev.offsetX == 0) { // Opera
            x = ev.offsetX;
            y = ev.offsetY;
        }

        // The event handler works like a drawing pencil which tracks the mouse 
        // movements. We start drawing a path made up of lines.
        if (!started) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            started = true;
        } else {
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    }
    
    ctx.moveTo(10, 10);
    ctx.lineTo(150, 50);
    ctx.lineTo(10, 50);
    ctx.stroke();
