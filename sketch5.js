let mic;
let vol = 0;
function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	mic = new p5.AudioIn();
	mic.start();
}

function draw() {
	getAudioContext().resume();
	vol = 1 - (mic.getLevel()*15);
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