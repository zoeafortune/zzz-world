let ypos = 100;
let xpos = 80;
let xstep = 50;
let ystep = 50;
let fillstep = 20;

let origx = 200;
let origy = 100;
let destx = 200;
let desty = 300;

function setup(){
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');
    noLoop();
}

function draw(){
background(255,255, 217);


for (let i = 0; i < 25; i++){
    fill (300, 200-(fillstep*i),200)
    noStroke();
    ellipse(xpos + xstep * i, ypos, 40, 40)
}

for (let i = 0; i < 10; i++){
    console.log(i);
}

/* draw line prism

    for (let i = 25; i < 400; i += 25){
    strokeWeight(2);
    stroke (190);
    line (i, 200, origx, origy);
    stroke (240);
    line (i, 200, destx, desty);
}*/

for (let j = 0; j < 25; j++){
    for (let i = 0; i <25; i++){
        noStroke();
        fill (200, 0+(fillstep*i),255)
        ellipse(xpos + (xstep*i), ypos + (ystep*j), 20, 20);
    }
}

}