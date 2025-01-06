let gif;

const images = document.getElementById("appear");


function preload(){
    gif = loadImage('images/spongebob.gif');
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);  // Use windowWidth and windowHeight directly
    cnv.position(0, 0);  // Make sure canvas is positioned at the top-left corner
    imageMode(CENTER);
    cnv.style('z-index', '-1'); 
    noCursor(); // Hide the default cursor
}

function draw() {
background(0);
    // Display the GIF at the mouse position
    image(gif, mouseX, mouseY, 100, 100);
}

function windowResized(){
    // Resize the canvas when the window is resized
    resizeCanvas(windowWidth, windowHeight);

}

function startDrag(e) {
    // determine event object
    if (!e) {
        var e = window.event;
    }
    if(e.preventDefault) e.preventDefault();

    // IE uses srcElement, others use target
    var targ = e.target ? e.target : e.srcElement;

    if (targ.className != 'dragme') {return};
    // calculate event X, Y coordinates
        offsetX = e.clientX;
        offsetY = e.clientY;

    // assign default values for top and left properties
    if(!targ.style.left) { targ.style.left='0px'};
    if (!targ.style.top) { targ.style.top='0px'};

    // calculate integer values for top and left 
    // properties
    coordX = parseInt(targ.style.left);
    coordY = parseInt(targ.style.top);
    drag = true;

    // move div element
        document.onmousemove=dragDiv;
    return false;
    
}
function dragDiv(e) {
    if (!drag) {return};
    if (!e) { var e= window.event};
    var targ=e.target?e.target:e.srcElement;
    // move div element
    targ.style.left=coordX+e.clientX-offsetX+'px';
    targ.style.top=coordY+e.clientY-offsetY+'px';
    return false;
}
function stopDrag() {
    drag=false;
}
window.onload = function() {
    document.onmousedown = startDrag;
    document.onmouseup = stopDrag;
}


function show(){
    //show on click
    // image.style.display = "block";

    //toggle back and forth
    if(images.style.display === "none"){
        images.style.display = "block";
    } else {
        images.style.display = "none"
    }
}

