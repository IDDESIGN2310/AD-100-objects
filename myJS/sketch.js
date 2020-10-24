
let cameraFeed;
let cw, ch;
let cameraViewW, cameraViewH, xoff;
let showOnboarding = true;

//img classifier
let classifier;
let label = "";
let imageModelURL = 'myData/model.json';


function preload(){
  //showOnboarding = true;
  classifier = ml5.imageClassifier(imageModelURL, modelLoaded);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  makeCameraFeedReady();
}

function draw() {
  background(0);

  if(showOnboarding){
    fill(255, 0, 0)
    rect(0,0,width,height)
  }

  
  if(cameraFeed){
    
      cw = cameraFeed.width;
      ch = cameraFeed.height;

      cameraViewH = height
      cameraViewW = cameraViewH * (cw/ch);   
      xoff = -(cameraViewW- width )/2 

      image(cameraFeed, xoff, 0, cameraViewW, cameraViewH);
     
    
      fill(0)
      let capSize = `cw : ${cameraFeed.width}, ch: ${cameraFeed.height}`
      text(capSize, 50, 20)
    
        // Draw the label
      rect(0,height-60, width, 60)
      fill(255);
      textSize(16);
      textAlign(CENTER);
   //text(label, width / 2, height - 20);
      text(label, 20, 40);
      fill(0)
      showOnboarding = false;
  }



}
