var video;

function setup() {
  createCanvas(1024, 1080);
  background(51);
  video = createCapture(VIDEO);
  video.size(1024, 1080);
  // video.hide();

}

function draw() {
  tint(255, 0, 150);
  image(video, 0, 0, mouseX, height);
}
