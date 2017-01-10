boolean showLetterJ = false;
boolean showLetterE = false;
boolean showLetterN = false;
boolean showLetterN2 = false;
boolean showLetterI = false;
boolean showLetterF = false;
boolean showLetterE2 = false;
boolean showLetterR = false;

color colorJ= color(245, 57, 138);
color colorE= color(163, 12, 206);
color colorN= color(255, 236, 62);
color colorN2= color(255, 0, 0);
color colorI= color(234, 67, 89);
color colorF=color(255, 135, 45);
color colorE2=color(43, 134, 200);
color colorR=color(3, 57, 215);

int xPos= 30;
int yPos = 50;
int my_height = 200;
int my_width =100;



PFont pFont;

void setup() {
  size(1000, 500);
  pFont = createFont("AvenirNext-Bold", 180);
  textFont(pFont);



}

void draw() {
  background(255);
  noStroke();

  if (showLetterJ == true) {
    fill(colorJ);
    text("J", 50, 250);
    } else {
    fill(255);
    rect(30, yPos, my_width+50, my_height+10);
  }


  if (showLetterE == true) {
   fill(colorE);
    text("E", 160,250);
  } else {
    fill(255);
    rect(160, yPos, my_width, my_height);
  }

  if (showLetterN == true) {
    fill(colorN);
    text("N",260, 250);
  } else {
    fill(255);
    rect(280, yPos, my_width, my_height);
  }

  if (showLetterN2) {
    fill(colorN2);
    text("N", 370, 250);
  } else {
    fill(255);
    rect(390, yPos, my_width, my_height); //N
  }

  if (showLetterI) {
   fill(colorI);
    text("I", 500, 250);
  } else {
    fill(255);
    rect(500, yPos, my_width/2, my_height); //I
  }

  if (showLetterF) {
    fill(colorF);
    text("F",560, 250);
  } else {
    fill(255);
    rect(560, yPos, my_width+10, my_height); //F
  }

  if (showLetterE2) {
    fill(colorE2);
    text("E", 675, 250);
  } else {
    fill(255);
    rect(675, yPos, my_width, my_height); //E
  }
  if (showLetterR) {
    fill(colorR);
    text("R", 780, 250);
  } else {
    fill(255);
    rect(780, yPos, my_width+20, my_height); //R
  }

  //Black lines
  fill(0);
  rect(30, yPos+ my_height + 10, my_width + 20, 5); //J
  rect(160, yPos+ my_height + 10, my_width, 5); //E
  rect(280, yPos+ my_height + 10, my_width, 5); //N
  rect(390, yPos+ my_height + 10, my_width, 5); //N
  rect(500, yPos+ my_height + 10, my_width- 50, 5); //I
  rect(560, yPos+ my_height + 10, my_width, 5); //F
  rect(675, yPos+ my_height + 10, my_width, 5); //E
  rect(780, yPos + my_height + 10, my_width+20, 5); //
}


  void mouseClicked() {
  if (showLetter(30, yPos, my_width, my_height)) {
    showLetterJ = !showLetterJ;
  } else if (showLetter(160, yPos, my_width, my_height)) {
    showLetterE = !showLetterE;
  } else if (showLetter(280, yPos, my_width, my_height)) {
    showLetterN = !showLetterN;
  } else if (showLetter(390, yPos, my_width, my_height)) {
    showLetterN2 = !showLetterN2;
  } else if (showLetter(500, yPos, my_width/2, my_height)) {
    showLetterI = !showLetterI;
  } else if (showLetter(560, yPos, my_width/2, my_height)) {
    showLetterF = !showLetterF;
  } else if (showLetter(675, yPos, my_width, my_height)) {
    showLetterE2 = !showLetterE2;
  } else if (showLetter(780, yPos, my_width + 20, my_height)) {
    showLetterR = !showLetterR;
  }
}

boolean showLetter(int xPos, int yPos, int my_width, int my_height) {
  if (mouseX > xPos && mouseX < xPos + my_width && mouseY > yPos && mouseY < yPos + my_height) {
    return true;
  } else {
    return false;
  }
}
