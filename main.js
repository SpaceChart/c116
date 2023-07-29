noseX=0;
noseY=0;

function preload() {
}
function setup() {
    canvas = createCanvas(350, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide(); 

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet esta inicializado');
}

function gotPoses(results) {
    if(results.length > 0)
    {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("nose x = " + noseX);
            console.log("nose y = " + noseY);
    }
function draw() {
    image(video, 0, 0, 350, 300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY, 20);
}
function take_snapshot() {
    save("filterphoto.png")
}
function filter_tint()
{
    tint_color = document.getElementById("color").value;
}