function init() {
    
    var touchzone = document.getElementById("touchzone");
    
    touchzone.addEventListener("touchstart", touchHandler, false);
}

function touchHandler(event) {
    
    document.getElementById("Koordinater").innerHTML = 'x:  ' + event.touches[0].pageX + ', y: ' + event.touches[0].pageY;
}