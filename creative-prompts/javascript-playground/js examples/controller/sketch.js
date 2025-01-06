let x = 0;
let y = 0;
let xpos;
let ypos;
let mode = 1;
let turtle = document.getElementById('turtle');
let turtlebird = document.getElementById('turtlebird');

function setup(){
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');
}

function draw(){
background(0,0,255);
    if (mode == 1){

    displayBird();

    }

    if ((xpos > 800 && xpos < 1100) && (ypos > 400 && ypos < 700)){
        turtle.style.display="block";
    }

    if ((xpos < 300) && (ypos < 300)){
        turtle.style.display="none";
        mode = 2;
        console.log(mode);
    }

    if (mode == 2){
        removeElements();
        turtle.style.display="none";
        turtlebird.style.display="block";
    }

if (keyIsPressed){
    if (keyCode == UP_ARROW){
        y-=5;
    }
    if (keyCode == DOWN_ARROW){
        y+=5;
    }

    if (keyCode == LEFT_ARROW){
        x-=5;
    }

    if (keyCode == RIGHT_ARROW){
        x+=5;
    }
}
}


function displayBird(){
    removeElements();
    let bird = createImg('images/bird.png');
    bird.size(200,200);
    bird.id('bird');
    xpos = width/2 - 100 + x;
    ypos = height/2 - 100 + y;
    bird.position(xpos,ypos);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);  // Resize the canvas when the window size changes
}