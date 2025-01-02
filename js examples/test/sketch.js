let gif;

function preload(){
    gif = loadImage('images/spongebob.gif');
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');
    
    imageMode(CENTER);
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
    background(0);
}
