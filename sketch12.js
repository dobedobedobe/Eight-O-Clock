var i = 0;

function setup() {
	noCanvas();
	let lang = navigator.language || "en-US";
	let speechRec = new p5.SpeechRec(lang, gotSpeech);

	let continuous = true;
	let interim = false;

	speechRec.start(continuous, interim);
	if (window.hasOwnProperty('webkitSpeechRecognition')) {
  		console.log('YOUR: working');
	} else {
	  console.log('YOUR: not working on this browser');
	}
	
	function gotSpeech() {
		if (speechRec.resultValue) {
			if (i < 3) {
				i += 1; 
				var id = i.toString();
				document.getElementById(id).innerHTML = speechRec.resultString;
			}
			else {
				document.getElementById("1").innerHTML = document.getElementById("2").innerHTML; 
				document.getElementById("2").innerHTML = document.getElementById("3").innerHTML; 
				document.getElementById("3").innerHTML = speechRec.resultString; 
			}
		}
		console.log(speechRec);
	}
}