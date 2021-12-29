peter_pan = "";
disney = "";

function setup(){
    canvas =  createCanvas(450,400);
    canvas.center();
    video = createCapture(400,400);
    video.hide();
    video.size(450,400);
}

function draw(){
    image(video,0,0,450,400)
}

function preload(){
    disney = loadsound("Disney_music.mp3");
    peter_pan = loadsound("peter_pan.mp3");
}