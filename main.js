nosex=0;
nosey=0;
difference=0;
rightwristx=0;
leftwristx=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
    }
    function modelLoaded() {
        console.log("modeloaded");
    }
    function draw() {
        background('#969A97');
        fill('#f90093');
    stroke('#f90093');
    textSize(difference);
text('stety', nosex, nosey);
    
    document.getElementById("suq").innerHTML = "size of text is " + difference + "px";
    }
    function gotPoses(results) {
        if(results.length > 0) {
            console.log(results);
            nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nosex = " + nosex+ "nosey = " + nosey);
        leftwristx = results[0].pose.leftWrist.x
       rightwristx = results[0].pose.rightWrist.x
       difference = floor(leftwristx - rightwristx);
       console.log("leftwrist = " + leftwristx + "rightwrist = " + rightwristx + "difference = " + difference);
        }
    }