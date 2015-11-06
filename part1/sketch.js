
/**
 * Setup the sketch
 */
function setup() {
	createCanvas(windowWidth, windowHeight);
}

/**
 * Main animation loop
 */
function draw() {
	// background(100);
	// background('blue');
	// background(255, 0, 0);

	// if(second() > 30) {
	// 	background(255, 0, 0);
	// } else {
	// 	background(0, 0, 255)
	// }

	// var blue = second()/60 * 255;
	var red = map(hour(), 0, 24, 0, 255);
	var green = map(minute(), 0, 60, 0, 255);
	var blue = map(second(), 0, 60, 0, 255);

	background(red, green, blue);
	// console.log(blue);
	console.log(hour()+':'+minute()+':'+second());
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
