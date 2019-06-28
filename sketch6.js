
let sketch = function(p) {
	let mic;
	let vol = 0;
	p.setup = function() {
		createCanvas(window.innerWidth/3, window.innerHeight);
		mic = new p5.AudioIn();
		mic.start();
	}

	p.draw = function() {
		getAudioContext().resume();
		vol = 1 - (mic.getLevel()*15);
		console.log(vol);
		if (vol < 0.1) {
			pixelDensity(0.05);
		}
		else {
			pixelDensity(vol);
		}
		loadPixels();
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				var index = (x + y * width) * 4;
				var r = random(255);
				pixels[index + 0] = r;
				pixels[index + 1] = r;
				pixels[index + 2] = r;
				pixels[index + 3] = 255;
			}
		}
		updatePixels();
	}
}

// let vid;
// let poses = [];
// let poseNet;
// let maxPoseDetections = 8;
// let outputStride = 16;
// let helFont;
// let instruct = ['OBEY', 'CONSUME', 'SUBMIT', 'CONFORM', 'NO THOUGHT', 'WORK', 'SLEEP'];
// let current = 0;
// let final = 0;
// let score = 0;

// function preload() {
//     helFont = loadFont('SFCompactDisplay-Black.otf');
// }

// function setup() {
//     createCanvas(innerWidth*2/3, innerHeight);
//     vid = createCapture(VIDEO);

//     //  vid = createVideo('IMG_8616_small.mov');
//     vid.hide();
//     poseNet = ml5.poseNet(vid, modelLoaded);
//     poseNet.on('pose', function (results) {
//         poses = results;
//     });
//     //    instruct = 
// }
// // When the model is loaded
// function modelLoaded() {
//     console.log('Model Loaded!');
// }

// // Listen to new 'pose' events
// function mousePressed() {
//     vid.loop(); // set the video to loop and start playing
// }

// function draw() {
//     background(50);
//     image(vid, 0, 0);
//     filter(GRAY);
//     drawKeypoints();
// }

// function drawKeypoints() {
//     current = final;
//     final = 0;
//     for (let i = 0; i < poses.length; i++) {

//         let pr = poses[i].pose.keypoints[0];
//         final += pr.position.x/poses.length;
// //        let pl = poses[i].pose.keypoints[2];
// //        console.log(poses);
//         if (poses[i].pose.score > 0.20) {
//             fill(255);
//             noStroke();
//             ellipse(pr.position.x, pr.position.y, 10);
//         }
        
//     }
//     if (final - current > 10 && current != 0) {
//         score += 6.5;
//         console.log(score);
//     } 
// }

new p5(sketch, 'div2');