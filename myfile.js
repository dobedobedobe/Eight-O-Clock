
let sketch = function(p) {
	let mic;
	let vol = 0;
	p.setup = function() {
		p.createCanvas(window.innerWidth/3, window.innerHeight);
		mic = new p5.AudioIn();
		mic.start();
	}

	p.draw = function() {
		p.getAudioContext().resume();
		vol = 1 - (mic.getLevel()*15);
		if (vol < 0.1) {
			p.pixelDensity(0.05);
		}
		else {
			p.pixelDensity(vol);
		}
		p.loadPixels();
		for (var y = 0; y < p.height; y++) {
			for (var x = 0; x < p.width; x++) {
				var index = (x + y * p.width) * 4;
				var r = p.random(255);
				p.pixels[index + 0] = r;
				p.pixels[index + 1] = r;
				p.pixels[index + 2] = r;
				p.pixels[index + 3] = 255;
			}
		}
		p.updatePixels();
	}
}

let sketch2 = function(p) {

	let vid;
	let poses = [];
	let poseNet;
	let helFont;
	let current = 0;
	let final = 0;
	let score = 0;
	let iterations = 0;
	let size = 20;
	p.preload = function() {
	    helFont = p.loadFont('SFCompactDisplay-Black.otf');
	}

	p.setup = function() {
	    p.createCanvas(innerWidth*2/3, innerHeight);
	    vid = p.createCapture(p.VIDEO);
	    vid.hide();
	    vid.size(innerWidth*2/3, innerHeight);
	    poseNet = ml5.poseNet(vid, p.modelLoaded);
	    poseNet.on('pose', function (results) {
	        poses = results;
	    });
	    //    instruct = 
	}
	// When the model is loaded
	p.modelLoaded = function() {
	    console.log('Model Loaded!');
	}

	// Listen to new 'pose' events
	p.mousePressed = function() {
	    vid.loop(); // set the video to loop and start playing
	}

	p.draw = function() {
	    p.background(50);
	    p.image(vid, 0, 0, innerWidth*2/3, innerHeight);
	    p.filter(p.GRAY);
	    if (score > 100) {
    		iterations++;
    		console.log(iterations);
    		if (iterations > 20) {
    			score = 0;
    			iterations = 0;
    			size = 20;
    		}
    		if (iterations % 4 == 0) {
    			p.background('red');
    		}
    		else {
    			p.background('white');
    		}
	    }
	    else {
	    	p.drawKeypoints();
		}
	}

	p.drawKeypoints = function() {
	    current = final;
	    final = 0;
	    for (let i = 0; i < poses.length; i++) {

	        let pr = poses[i].pose.keypoints[0];
	        final += pr.position.x;
	        if (poses[i].pose.score > 0.20) {
	            p.fill(255, 0, 0, 180);
	            p.noStroke();
	            p.ellipse(pr.position.x, pr.position.y, size);
	        }
	    }

	    if (final - current > 70 && current != 0) {
	        score += 1;
	        size += 7;
	        console.log(score)
	    }
	    if (score <= 100) {
	    	document.getElementById("score").innerHTML = score;
	    }
	}
}

new p5(sketch, document.getElementById("div3"));
new p5(sketch2, document.getElementById("div1"));