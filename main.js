Webcam.set({
    width : 400,
    height : 300,
    image_format : 'png',
    jpeg_quality : 90
});
 camera = document.getElementById("camera");
 Webcam.attach("#camera");

 function take_snapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("image").innerHTML = '<img id = "take_snap" src = "'+ data_uri +'">';
     });
 }
 console.log('ml5 version', ml5.version);
 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2XwdW2pP9/model.json', modelLoaded);
  function modelLoaded(){
      console.log("model has loaded");
  }

  function recognizeObject(){
      img = document.getElementById("take_snap");
      classifier.classify(img, gotResult);
  }

  function gotResult(error, results){
      if(error){
          console.error(error);
      }
      else{
          console.log(results);
          document.getElementById("result_objectName").innerHTML = results[0].label;
          document.getElementById("result_objectAccuracy").innerHTML = results[0].confidence.toFixed(3);
      }
  }