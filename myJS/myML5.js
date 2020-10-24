function classifyVideo() {
  classifier.classify(cameraFeed, gotResult);
}

//check it ready
function modelLoaded() {
  //showOnboarding = false;
  console.log('Model Loaded!');
}


// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  if(results[0].confidence > 0.8){
    label = `I found ${results[0].label}`;
  }else{
    label = "Looking for an Australian Design product";
  }
  
  // Classifiy again!
  classifyVideo();
}
