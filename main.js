function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier =  ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/b7SvyISqn/model.json", modelReady);
    
    classifier.classify(gotResults);
}

    function gotResults(error, results){
        console.log("Got Results");
        if(error){
            console.log(error)
        }
        else{
            console.log(results)
        }
    }

    meowing = 0;
    barking = 0;
    howling = 0;
    chicken_sound = 0;
    frog_sound = 0;