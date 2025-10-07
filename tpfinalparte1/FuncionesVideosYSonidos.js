function videos() {
  if(estado == 'intro'){  
  image(video, 0, 0, width, height);
  }
}

function mousePressed() {
  if (estado == 'intro') {
    video.play();
  }
}
