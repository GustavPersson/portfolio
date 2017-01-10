color paintColor = color(0, 0, 0);
int paintWidth = 1;
int brush= 0;

void setup(){
  size(600, 600);
  background(255);
  stroke(0, 0, 0);
}

void draw(){
  strokeWeight(1);
  stroke(0);
  //blue button
  fill(9, 32, 175);
  rect(0, 0, 20, 20);

  //pink button
  fill(247, 147, 214);
  rect(20, 0, 20, 20);

  //yellow button
  fill(251, 255, 46);
  rect(40, 0, 20, 20);

  //clear screen button
  fill(255);
  rect(60, 0, 20, 20);

  //small line button
  strokeWeight(1);
  line(100, 0, 100, 20);

  //medium line button
  strokeWeight(5);
  line(120, 0, 120, 20);

  //large line button
  strokeWeight(10);
  line(140, 0, 140, 20);


 if(mousePressed==true){

   if(mouseX < 20 && mouseX > 0 && mouseY < 20 && mouseY > 0){
   paintColor = color(9, 32, 175);

   }
   else if(mouseX < 40 && mouseX > 20 && mouseY < 20 && mouseY > 0){
   paintColor = color(247, 147, 214);
   }
   else if(mouseX < 60 && mouseX > 40 && mouseY < 20 && mouseY > 0){
   paintColor = color(251, 255, 46);
   }
   else if(mouseX < 90 && mouseX > 60 && mouseY < 20 && mouseY > 0){
   background(255);
   }
   else if(mouseX < 110 && mouseX >90 && mouseY <20 && mouseY > 0 ){
      paintWidth=1;
      brush= 1;
    }
    else if(mouseX < 130 && mouseX >110 && mouseY <20 && mouseY >0){
      paintWidth= 5;
      brush=2;
    }
    else if(mouseX < 150 && mouseX >130 && mouseY <20 && mouseY >0){
      paintWidth= 10;
      brush=3;
    }
    strokeWeight(paintWidth);
    stroke(paintColor);
    if(mouseY > 30){
      if(brush==1){
            line(pmouseX, pmouseY, mouseX, mouseY);

      }else if(brush==2){
            line(pmouseX, pmouseY, mouseX, mouseY);

      }else if(brush==3){
          line(pmouseX, pmouseY, mouseX, mouseY);
      }
    }
 }

}
