noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
rightWristY = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');

}
function draw(){
    background('#88eedd');
    textSize(difference);
    fill('#003366');
    text('Cheryl',50,100);
}

function gotPoses(results){

    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);
        
        console.log("leftWristX = "+results[0].pose.leftWristX+"difference = "+difference)
        console.log("rightWristX = "+results[0].pose.rightWristX+"difference = "+difference)
    }
    if(error){
        console.error(error);
    }
    }

    