var questions = ["Question1", "Question2", "Question3", "Question4", "Question5"];
var answers = ["Answer1", "Answer2", "Answer3", "Answer4", "Answer5"];
var questions_length = questions.length;
var counter = 0;
var showAnswer_bool = true;
document.getElementById("question").innerHTML = questions[counter % questions_length];

function nextQuestion() {
	counter++;
	document.getElementById("question").innerHTML = questions[counter % questions_length];
	showAnswer_bool = true;
}

function previousQuestion() {
	counter--;
	if (counter < 0)
		counter = questions_length - 1;
	document.getElementById("question").innerHTML = questions[counter % questions_length];
}

function showAnswer() {
	if (showAnswer_bool) {
		document.getElementById("question").innerHTML = questions[counter % questions_length] + "<br><br>" + answers[counter % questions_length];
		showAnswer_bool = false; 		
	}
	else {
		document.getElementById("question").innerHTML = questions[counter % questions_length];
		showAnswer_bool = true;
	}
}

document.body.addEventListener("keypress", function (event) {
		if (event.key === 'n') {
			nextQuestion();
		}
		else if (event.key === 'p') {
			previousQuestion();
		}
		else if (event.key === 's') {
			showAnswer();
			console.log("Show Answer Called");
		}
});


/*Code To check whether getUser Media is working on your current Browser*/
// function hasGetUserMedia() {
//	 return !!(navigator.mediaDevices &&
//		 navigator.mediaDevices.getUserMedia);
// }

// if (hasGetUserMedia()) {
// 	alert('getUserMedia() is supported by your browser');
// } else {
// 	alert('getUserMedia() is not supported by your browser');
// }

// const constraints1 = {
// 	video: true
// };

const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");

function streamCam() {
	const constraints1 = {
		video: {
			label: {exact: "c922 Pro Stream Webcam (046d:085c)"}
		}
	}
	navigator.mediaDevices.getUserMedia(constraints1).then((stream) => {video1.srcObject = stream});
	
	const constraints2 = {
		video: {
			label: {exact: "Logitech Webcam C930e (046d:0843)"}
		}
	}
	navigator.mediaDevices.getUserMedia(constraints2).then((stream) => {video2.srcObject = stream});
}
videolist = []
function gotDevices(deviceInfos) {
	for (let i = 0; i !== deviceInfos.length; ++i) {
		const deviceInfo = deviceInfos[i];
		if (deviceInfo.kind == "videoinput") {
			var label = deviceInfo.label;
			if (label.includes("c922")) {
				const constraints = {
					video: {
						deviceId: {exact: deviceInfo.deviceId}
					}
				}
				navigator.mediaDevices.getUserMedia(constraints).then((stream) => {video1.srcObject = stream});
			}
			else if (label.includes("C930e")) {
				const constraints = {
					video: {
						deviceId: {exact: deviceInfo.deviceId}
					}
				}
				navigator.mediaDevices.getUserMedia(constraints).then((stream) => {video2.srcObject = stream});
			}
			console.log(deviceInfo);
		}
		// if (deviceInfo.kind === 'videoinput') {
		// 	videolist.push(deviceInfo);
		// }
	}
}

function streamCameras() {
	for (var i = 0; i < 2; i++) {
		console.log(videolist[i]);
		const constraints = {
			video: {
				deviceId: {exact: videolist[i].deviceId}
			}
		}
		if (i == 0) {
			navigator.mediaDevices.getUserMedia(constraints).then((stream) => {video1.srcObject = stream});
		}
		else {
			navigator.mediaDevices.getUserMedia(constraints).then((stream) => {video2.srcObject = stream});
		}
	}
}

navigator.mediaDevices.enumerateDevices().then(gotDevices);
// navigator.mediaDevices.enumerateDevices().then(gotDevices).then(streamCameras);
// streamCam();