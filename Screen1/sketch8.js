let video;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    background(50);
    tint(255, 150);
    imageMode(CENTER)
    var aspectRatio = window.innerWidth/window.innerHeight;
    for (let i = window.innerHeight; i > 40; i -= 80) {
        let x = width/2 + noise(i * frameCount*12);
        let y = height / 2 + noise(i * frameCount*2);
        console.log(x);
        image(video, x, y, i*aspectRatio, i)
    }
}

