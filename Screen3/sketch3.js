let mic;
let vol = 0;
function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	pixelDensity(1);
	loadPixels();
}

function draw() {
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
