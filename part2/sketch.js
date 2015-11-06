var img;
var dayOfMonth;
/**
 * Setup the sketch
 */
function setup() {
	createCanvas(windowWidth, windowHeight);

	dayOfMonth = day();
	// dayOfMonth = 24;
	if(dayOfMonth < 15) {
		img = loadImage("cat_hammock.jpg");
	} else {
		img = loadImage("cat_looking.jpg");
	}
}

/**
 * Main animation loop
 */
function draw() {
	image(img, 0, 0, 600, 400);
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
