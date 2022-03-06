  let look;
  let ellipseY = 400;
  let fr = 60;
  let drawFish = [];
  
function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
    
for(let i = 0; i < 20; i++){
  let x = random(width*-0.125, width*1.125);
  let y = random(height*-0.125, height*1.125);
    drawFish[i] = new fish(x,y);
  }
}

function draw() {
//background color
  background(0,95,180);
  let c = color(120, 255, 100);
  noStroke();
  for (let i = 0; i < 20; i++) {
    drawFish[i].display();
    drawFish[i].move(this.t)
  }
  let vol = mic.getLevel() * 800;
//console.log(vol);
//console.log(mouseX, mouseY);
  frameRate(fr);



//eye movement
  if(mouseX > width*0.4 && mouseX < width*1) {
    look = 1;
  } else {
    look = 0;
  }
  
//bubble movement
  frameRate(fr)
  ellipseY = ellipseY - 5 * (deltaTime / 50);
  if (ellipseY >= 400) {
    if (fr === 60) {
      fr = 10;
      frameRate(fr);
    } else {
      fr = 60;
      frameRate(fr);
    }
    ellipseY = 400;
  }
  if (ellipseY < -350){
    ellipseY = 400;
  }


  
//avatar drawing 
bubbles()
body() 
eye()
pupil()
underbelly()
spines()
blueSpines()
mouth()
blueTint()

  
  function body() {
//main body green 
    let c = color(84, 227, 54)
  fill(c);
  scale(1.6);
  translate(-85,-10);
  rect(width*0.450, height*0.250, width*0.18755, height*0.214);
  rect(width*0.3, height*0.3, width*0.15, height*0.0625);
  triangle(width*0.3, height*0.3125, width*0.45, height*0.3125, width*0.45, height*0.25);
  triangle(width*0.6375, height*0.3125, width*0.7875, height*0.3125, width*0.6375, height*0.25);
  triangle(width*0.7875, height*0.3625, width*0.8375, height*0.3625, width*0.7875, height*0.3125);
  square(width*0.6375, height*0.3125, width*0.15);
  square(width*0.5, height*0.4625, width*0.0875);
  square(width*0.55, height*0.55, width*0.0875);
  square(width*0.55, height*0.3625, width*0.2875);
}

  function eye() {
//yellow eye
    let f = color(255, 255, 0);
  fill(f);
  ellipse(width*0.455, height*0.295, width*0.05, height*0.015);
}
  
  function pupil() {
//black pupil
    let g = color(0, 0, 0);
  fill(g);
    
    if(look == 0){
//look left
  ellipse(width*0.44, height*0.29375, width*0.00375, height*0.0125);
    } else if(look == 1) {
//look right
  ellipse(width*0.46, height*0.29375, width*0.00375, height*0.0125);
    }

}

  
  function mouth() {
      let d = color(220, 255, 200);
  translate(0,vol*0.29);
  fill(d);
  rect(width*0.3, height*0.3625, width*0.15, height*0.0375);
  triangle(width*0.3, height*0.3995, width*0.45, height*0.399, width*0.45, height*0.4625);
}
  
  function underbelly() {
//underbody light green
    let d = color(220, 255, 200);
fill(d);
triangle(width*0.5, height*0.4625, width*0.45, height*0.4625, width*0.5, height*0.55);
triangle(width*0.55, height*0.55, width*0.5, height*0.55, width*0.55, height*0.65);
}

  function spines() {
//dark green spines and brow
      let e = color(0, 105, 0);
  fill(e);
  rect(width*0.425, height*0.275, width*0.075, height*0.0175);
  triangle(width*0.675, height*0.2655, width*0.7125, height*0.28125, width*0.71, height*0.25);
  triangle(width*0.725, height*0.28625, width*0.79, height*0.315, width*0.7875, height*0.25);
  triangle(width*0.8875, height*0.25, width*0.8375, height*0.3625, width*0.7875, height*0.31375);
}
  
  function blueSpines() {
//blue spines
      let e = color(5, 255, 255, vol*7);
  fill(e);
  triangle(width*0.675, height*0.2655, width*0.7125, height*0.28125, width*0.71,   height*0.25);
  triangle(width*0.725, height*0.28625, width*0.79, height*0.315, width*0.7875, height*0.25);
  triangle(width*0.8875, height*0.25, width*0.8375, height*0.3625, width*0.7875, height*0.31375);
}
  

  function bubbles() {
//bubbles
    let g = color(255, 255, 255, 75);
  fill(g);
  ellipse(width*0.4, ellipseY, width*0.1);  
  ellipse(width*0.1, ellipseY + 75, width*0.05);
  ellipse(width*0.7, ellipseY - 25, width*0.075);
  ellipse(width*0.9, ellipseY + 80, width*0.05);
  ellipse(width*0.2, ellipseY + 210, width*0.05);
  ellipse(width*0.55, ellipseY + 150, width*0.09); 
  ellipse(width*0.8, ellipseY + 250, width*0.045);
  }
}

class fish {
//background fish
  constructor (xpos, ypos){
    this.xpos = xpos;
    this.ypos = ypos;
    this.t = int(random(2000));
    this.s = random(0.01);
  }
  display(){
  push();
  translate(this.xpos, this.ypos);
  rotate(this.t)
    let f = color(20, 62, 110)
  fill(f);
  ellipse(width*0.5, height*0.2, width*0.1, height*0.04)
  triangle(width*0.5125, height*0.2, width*0.58, height*0.1875, width*0.58, height*0.2125);
  pop();
      }
    move() {
      this.t = this.t + this.s
    }
  }

  function blueTint(){
      let g = color(50, 100, 255, 30);
    fill (g);
    rect(0, 0, width*1, height*1);
  }