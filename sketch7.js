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

new p5(sketch, document.getElementById("div3"));