var img;
var imageWidth = 600;
var imageHeight = 400;
var mainText;
var imagePath = '';
var bodyElement;
var mainTextElement;
var dayOfMonth;

function preload() {
	dayOfMonth = day();
	// manually change dayOfMonth to test
	// dayOfMonth = 6;
	if(dayOfMonth == 1) {
		mainText = "hang in there, boddy";
		imagePath = "images/cat_hammock.jpg";
	} else if (dayOfMonth == 2){
		mainText = "why do you keep staring at me?";
		imagePath = "images/cat_looking.jpg";
	} else if (dayOfMonth == 3){
		mainText = "stop and smell the roses!";
		imagePath = "images/cat3.jpg";
	} else if (dayOfMonth == 4){
		mainText = "tastes like chicken";
		imagePath = "images/cat4.jpg";
	} else if (dayOfMonth == 5){
		mainText = "anyone have a breath mint?";
		imagePath = "images/cat5.jpg";
	} else if (dayOfMonth == 6){
		mainText = "i'm sleepy";
		imagePath = "images/cat6.jpg";
	} else if (dayOfMonth == 7){
		mainText = "why do you keep staring at me?";
		imagePath = "images/cat7.jpg";
	} else if (dayOfMonth == 8){
		mainText = "why do you keep staring at me?";
		imagePath = "images/cat8.jpg";
	} else if (dayOfMonth == 9){
		mainText = "why do you keep staring at me?";
		imagePath = "images/cat9.jpg";
	} else if (dayOfMonth == 10){
		mainText = "why do you keep staring at me?";
		imagePath = "images/cat10.jpg";
	} else if (dayOfMonth == 11){
		mainText = "why do you keep staring at me?";
		imagePath = "images/cat11.jpg";
	} else if (dayOfMonth == 12){
		mainText = "why do you keep staring at me?";
		imagePath = "images/cat12.jpg";
	} else if (dayOfMonth >= 13){
		mainText = "why do you keep staring at me?";
		imagePath = "images/cat13.jpg";
	}

	img = loadImage(imagePath);
}

/**
 * Setup the sketch
 */
function setup() {
	createCanvas(windowWidth, windowHeight);

	bodyElement = select('body');

	console.log(bodyElement);

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
