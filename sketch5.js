let mic;
let vol = 0;
let instruct = ['OBEY', 'CONSUME', 'CONFORM', 'SUBMIT'];
function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	mic = new p5.AudioIn();
	mic.start();
}

function draw() {
	getAudioContext().resume();
	vol = 1 - (mic.getLevel()*15);
    //console.log(vol);
	if (vol < 0.1) {
		pixelDensity(0.05);
        
	}
	else {
		pixelDensity(vol);
        
	}
   // console.log(vol);
	loadPixels();
	for (var y = 0; y < height; y++) {
		for (var x = 0; x < width; x++) {
			var index = (x + y * width) * 4;
            
           if  (vol < 0.5 && vol > 0.3){
            //r = 255;
//            console.log("instruct");
//            console.log(vol);
            pixels[index + 0] = 255;
			pixels[index + 1] = 255;
			pixels[index + 2] = 255;
			pixels[index + 3] = 255;
               
        } else {
            var r = random(255);
			pixels[index + 0] = r;
			pixels[index + 1] = r;
			pixels[index + 2] = r;
			pixels[index + 3] = 255;
        }
		}
        
	}
	updatePixels();
    if  (vol < 0.5 && vol > 0.4){
        textSize(60)
        text(random(instruct), width/2, height/2);
        console.log(random(instruct));
    }
}
