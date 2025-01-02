let rectObjs = []

function setup(){
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');
}

function draw(){
   background(0);
   noStroke();
   rectMode (CENTER);
   fill(255);

   for(let i = 0; i < rectObjs.length; i++){
    fill(rectObjs[i].fillColor);
    rect(rectObjs[i].xpos, rectObjs[i].ypos, 50, 50);
    rectObjs[i].ypos +=1;
   }

   for(let i = rectObjs.length - 1; i >= 0; i--) {
    if(rectObjs[i].ypos > height){
        rectObjs.splice(i,1);
    }

   }
}


function mousePressed(){
    rectObjs.push({xpos:mouseX, ypos:mouseY, fillColor: random(255)})
}