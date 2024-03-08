status = "";

function preload(){
    image1 = loadImage("1.jpg");
}

function setup(){
    canvas = createCanvas(500, 650);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}

function draw(){
    image(image1, 0, 0, 500, 650);
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(image1 ,got_results);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function got_results(error, result){
    if(error){
        console.error(error);
    }else{
        console.log(result);
    }
}