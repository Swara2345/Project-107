function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});

}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {1
}