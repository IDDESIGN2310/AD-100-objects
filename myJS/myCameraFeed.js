const constraints = (window.constraints = {
  audio: false,
  video: true
});

function makeCameraFeedReady() {

 // let videoOut = null;

  if (  /iPhone/i.test(navigator.userAgent) ) {
    let constraints = {
      video: { facingMode: "environment" },
      audio: false
    };

    cameraFeed = createCapture(constraints, function(stream) {
    cameraFeed.stop();
      setInterval(function() {
        cameraFeed.play();
        cameraFeed.hide();
      }, 2000);
    });

    //ML5 part
    classifyVideo();
    
  } else if ( /Android/i.test(navigator.userAgent) ) {
    navigator.mediaDevices
      .enumerateDevices()
      .then(function(devices) {
            console.log(devices)
            let constraints = {
              video: {
                deviceId: devices[1].deviceId,
                width: { exact: 256 },
                height: { exact: 192 },
                frameRate: {max: 30}
              },
              audio: false
            };

            cameraFeed = createCapture(constraints);
            cameraFeed.hide();
      
      
            //ML5 part
            classifyVideo();
            
          })
      .catch(function(err) {
        console.log(err.name + ": " + err.message);
      });
      
  } else {
    let constraints = {
      video: { facingMode: "user" },
      audio: false
    };

    cameraFeed = createCapture(constraints);
    cameraFeed.hide();
    
    //ML5 part
    classifyVideo();
  }
  

}



