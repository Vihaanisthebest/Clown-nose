noseX = 0;
noseY = 0;  
function preload()
{
    clownnose = loadImage("https://i.postimg.cc/J0J023Yd/clownnose-removebg-preview.png");
}

function setup()
{
    canvas = createCanvas(350, 300);
    canvas.center();    
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded()
{
    console.log('PoseNet Is Intailized');
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 350, 300);
    image(clownnose, noseX-23, noseY-20, 52, 52);
}

function take_snapshot()
{
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}