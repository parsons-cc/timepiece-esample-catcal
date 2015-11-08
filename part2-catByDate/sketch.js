var img;
var imageWidth = 600;
var imageHeight = 400;
var dayOfMonth;

/**
 * Setup the sketch
 */
function setup() {
	createCanvas(windowWidth, windowHeight);


	dayOfMonth = day();
	// manually change dayOfMonth to test
	// dayOfMonth = 12;
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
	// draw image from top-left corner
	// image(img, 0, 0, 600, 400);

	// draw centered image
	image(img, (width/2)-(imageWidth/2), (height/2)-(imageHeight/2));
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
