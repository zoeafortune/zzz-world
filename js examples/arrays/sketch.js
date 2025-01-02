let rectXY = []

function setup(){
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');
}

function draw(){
    background(0);
    rectMode(CENTER);
    noStroke();
    fill (255);


    for (let i = 0; i < rectXY.length; i++){
        fill(rectXY[i][2]);
        rect(rectXY[i][0], rectXY[i][1],50, 50);
        rectXY[i][1] += 1;
    }
}

function mousePressed(){
  rectXY.push([mouseX, mouseY,random(255)]);
}
