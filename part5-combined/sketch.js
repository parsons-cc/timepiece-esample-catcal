var img;
var imageWidth = 600;
var imageHeight = 400;
var text1 = "hang in there, buddy";
var text2 = "why do you keep staring at me?";
var mainText;
var bodyElement;
var mainTextElement
var dayOfMonth;

function preload() {
	dayOfMonth = day();
	// manually change dayOfMonth to test
	dayOfMonth = 19;
	if(dayOfMonth < 15) {
		mainText = text1;
		img = loadImage("images/cat_hammock.jpg");
	} else {
		mainText = text2;
		img = loadImage("images/cat_looking.jpg");
	}

}

/**
 * Setup the sketch
 */
function setup() {
	createCanvas(windowWidth, windowHeight);

	bodyElement = select('body');


	// draw main text element using HTML instead of canvas
	// http://p5js.org/reference/#/libraries/p5.dom
	mainTextElement = createElement('h3', mainText);
	mainTextElement.style('width', '100%');
	mainTextElement.style('text-align', 'center');
	mainTextElement.style('font-weight', 'normal');
	mainTextElement.parent(bodyElement);
}

/**
 * Main animation loop
 */
function draw() {

	var red = map(hour(), 0, 24, 0, 255);
	var green = map(minute(), 0, 60, 0, 255);
	var blue = map(second(), 0, 60, 0, 255);

	background(red, green, blue);

	image(img, width/2-imageWidth/2, height/7, imageWidth, imageHeight);

	mainTextElement.position(width/0, 4*height/5);

}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
