nose_x = 0
nose_y = 0

function preload(){
    mustache = loadImage(Moustache-PNG-Pic.png)
}

function setup(){
    canvas = createCanvas(550, 500);
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
    PoseMachine = ml5.poseNet(video, ModelActivated);
    PoseMachine.on("pose", gotPoses)
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x = " + nose_x +"and nose y =" +nose_y);
    }
}

function draw(){
    image(video, 0, 0, 550, 500);
    image(clown_nose, nose_x, nose_y, 30, 30)
}
function Snapshot(){
    save("fakeMature_Picture.png")
}

function ModelActivated(){
    console.log("PoseNet Model has initiated")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
    }
}