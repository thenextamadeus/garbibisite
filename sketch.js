let bg;
let img;
let spotify;
let like;
let star;
let tele;
let fun;
let arco;

let x;
let y;
let xspeed;
let yspeed;

let j;
let k;

let jspeed;
let kspeed;

let m;
let n;

let mspeed;
let nspeed;

let w;
let e;

let wspeed;
let espeed;

let isPaused = false;
let capture;

vartracker = null;
varfeatures = null; 




function preload(){
  //loading images
  img = loadImage('../images/text_message.png');
  spotify = loadImage('../images/spotifycopy.png');
  like = loadImage('../images/like.png');
  star = loadImage('../images/star.png');
  tele = loadImage('../images/colouroption.png');
  fun = loadImage('../images/starbg.png');
  arco =loadImage('../images/arcologo.png');
}

function setup() {
createCanvas(windowWidth, windowHeight);

  x = 400;
  y = 300;
  xspeed = 10;
  yspeed = 10;

  j = 50;
  k = 100;
  jspeed = 5;
  kspeed = 5;

  m = 500;
  n= 200;
  mspeed = 15;
  nspeed = 15;

  w=200;
  e=400;
  wspeed = 20;
  espeed = 20;

   // Create a video capture object
   capture = createCapture(VIDEO);
   capture.size(640, 480);
   capture.hide()

   tracker = new clm.tracker();
   tracker.init();
   tracker.start(capture.elt);
  }


function draw(){
  
  background('#0C0C0C');
  image(img,x,y);
  image(spotify,j,k);
  image(like,m,n);
  image(star,w,e);

  if(!isPaused) {
    //text message
    x = x + xspeed;
    y = y + yspeed;

    if (x + 277 >= windowWidth || x <= 0) {
      xspeed *= -1;
    }

    if (y+271 >= windowHeight || y <= 0) {
      yspeed *= -1;
    }

    //spotify dupe
    j = j + jspeed;
    k = k + kspeed;

    if (j + 215 >= windowWidth || j <= 0) {
      jspeed *= -1;
    }

    if (k+244 >= windowHeight || k <= 0) {
      kspeed *= -1;
    }

    //like
    m = m + mspeed;
    n = n + nspeed;

    if (m  >= windowWidth || m <= 0) {
      mspeed *= -1;
    }

    if (n+244 >= windowHeight || n <= 0) {
      nspeed *= -1;
    }

    //star
    w = w + wspeed;
    e = e + espeed;

    if (w+151  >= windowWidth || w <= 0) {
      wspeed *= -1;
    }

    if (e+176 >= windowHeight || e <= 0) {
      espeed *= -1;
    }
  }

  // Flip the camera horizontally
  translate(width, 0);
  scale(-1, 1);
  // Draw the video capture to the canvas
  image(capture, 490, 80, 590, 550);
  

  //tv infront?
  image(tele,260,-100);

  scale(-1, 1);
  translate(-width, 0);
  image(fun,900,10);

  //arcofilter
  features = tracker.getCurrentPosition();

  if (features.length > 0){
    var leftEye = features[27];
    var leftEyeX = leftEye[0]  + 400;
    var leftEyeY = leftEye[1] + 50;

    image(arco,leftEyeX, leftEyeY,);
  }

}


//pausethemovement
function mousePressed() {
  isPaused = !isPaused;
}

function keyPressed() {
  // Take a snapshot of the current frame when the spacebar is pressed
  if (key === 's') {
    saveCanvas(canvas,'photobooth', 'png'); // Save the canvas as a PNG file
  }
}






