var start = Date.now(); 
var end = Date.now();
var shape = document.getElementById("shape");
var toggleVar = 1;

function updateHighscore(score){
	if(score > highscore){
		highscore = score;
	}
}

//	Function for the button to close the info dialouge, initiate the shape and start playing the music.
document.getElementById("info-container-button").onclick = function() {
	document.getElementById("info-container").style.display = "none";
	initiateShape();
}


//	Generates a random RGB value for the target.
function generateRandomColor() {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for(var i=0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
	return color;
}

// Determines a diameter / width for the created shape.
function determineDiameter() {
	var diameter = Math.floor(Math.random() * 50 + 30);
	return diameter;
}

// Determines whether the shape will be a square or a circle
function determineShape() {
	if(Math.random() > 0.5){
        shape.style.borderRadius = "50%";
    } else {
        shape.style.borderRadius = "0%";
    }
}

// Initiates the shape with a pseudo-random diameter at a pseudo-random location and a random background color and Starts the timer to calculate the reaction time. 
function initiateShape() {
    var diameter = determineDiameter()
    var top = Math.floor(Math.random() * (350 - diameter) + 35);
    var left = Math.floor(Math.random() * (650 - diameter) + 10);
    shape.style.top = top + "px";
    shape.style.left = left + "px";
    shape.style.width = diameter + "px";
    shape.style.height = diameter + "px";
    shape.style.backgroundColor = generateRandomColor();
    shape.style.display = "block";
    determineShape();
    start = Date.now();
}

// Defines the click event.
document.getElementById("shape").onclick = function() {            
    end = Date.now();
    var result = (end - start) / 1000;
    document.getElementById("timer").innerHTML = result;
    document.getElementById("shape").style.display = "none";
    setTimeout(initiateShape, Math.floor(Math.random() * 1000 + 550)); // Runs the initiateShape function after a number of miliseconds. The timer is pseudo-random in this case.
}