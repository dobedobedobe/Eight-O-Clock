
// let sketch = function(p) {
//     let video;
//     p.setup = function() {
//         p.createCanvas(window.innerWidth*2/3, window.innerHeight);
//         video = p.createCapture(p.VIDEO);
//         video.hide();
//     }

//     p.draw = function() {
//         p.background(50);
//         p.tint(255, 150);
//         p.imageMode(p.CENTER);
//         var aspectRatio = (window.innerWidth*2/3)/window.innerHeight;
//         for (let i = window.innerHeight; i > 40; i -= 80) {
//             let x = p.width/2 + p.noise(i * p.frameCount*12);
//             let y = p.height / 2 + p.noise(i * p.frameCount*2);
//             p.image(video, x, y, i*aspectRatio, i)
//         }
//     }
// }

// new p5(sketch, document.getElementById("div3"));

let video;
function setup() {
    createCanvas(window.innerWidth/2, window.innerHeight);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()  {
    background(50);
    tint(255, 150);
    imageMode(CENTER);
    var aspectRatio = (window.innerWidth/3)/window.innerHeight;
    for (let i = window.innerHeight; i > 100; i -= 120) {
        let x = width/2 + noise(i * frameCount*12);
        let y = height / 2 + noise(i * frameCount*2);
        image(video, x, y, i*aspectRatio, i)
    }
}