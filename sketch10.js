questions = ["Question1", "Question2", "Question3", "Question4", "Question5"];
questions_length = questions.length;
counter = 0;

document.getElementById("question").innerHTML = questions[counter % questions_length];

function nextQuestion() {
	counter++;
	document.getElementById("question").innerHTML = questions[counter % questions_length];
}

function previousQuestion() {
	counter--;
	if (counter < 0)
		counter = questions_length - 1;
	document.getElementById("question").innerHTML = questions[counter % questions_length];
}

document.body.addEventListener("keypress", function (event) {
    if (event.key === 'n') {
    	nextQuestion();
    }
    else if (event.key === 'p') {
    	previousQuestion();
    }
});

/*Code To check whether getUser Media is working on your current Browser*/
// function hasGetUserMedia() {
//   return !!(navigator.mediaDevices &&
//     navigator.mediaDevices.getUserMedia);
// }

// if (hasGetUserMedia()) {
// 	alert('getUserMedia() is supported by your browser');
// } else {
// 	alert('getUserMedia() is not supported by your browser');
// }

const constraints = {
  video: true
};

const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
navigator.mediaDevices.getUserMedia(constraints).then((stream) => {video1.srcObject = stream});
navigator.mediaDevices.getUserMedia(constraints).then((stream) => {video2.srcObject = stream});