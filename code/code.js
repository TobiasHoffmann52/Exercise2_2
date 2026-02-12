function preload() {
  img = loadImage('/assets/jamaican_flag.png');
}

function setup() {
  createCanvas(1280, 640);
  noStroke();
  angleMode(DEGREES);

  let gold = color(255, 184, 28);
  let green = color(0, 119, 73);
  let black = color(45, 41, 38);

  fill(gold);
  rect(0, 0, width, height);
  push();
  translate(width/2, height/2);

  fill(green);
  triangle(0, 60, -(width/2)+120, height/2, (width/2)-120, height/2);
  push();
  rotate(180);
  triangle(0, 60, -(width/2)+120, height/2, (width/2)-120, height/2);
  pop();

  rotate(90);
  fill(black);
  triangle(0, 120, -(height/2)+60, width/2, (height/2)-60, width/2);
  push();
  rotate(180);
  triangle(0, 120, -(height/2)+60, width/2, (height/2)-60, width/2);
  pop();
  pop();

  tint(255, 128)
    image(img, 0, 0);
}


function draw() {
}
