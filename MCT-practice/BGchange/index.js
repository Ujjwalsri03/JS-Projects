let main = document.getElementById("main");
let imageBox = document.getElementById("imageBox");
let prev = document.getElementById("leftArrow");
let next = document.getElementById("RightArrow");

const images = [
  'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
  'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
  'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1542378151504-0361b8ec8f93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D'
];

let setImageIdx = 0;

setBackgroundImagebox();
setBackgroundBody();


function goToNextImage() {
  if (setImageIdx === images.length - 1) {
    setImageIdx = 0;
  } else {
    setImageIdx++;
  }
  setBackgroundImagebox();
  setBackgroundBody();
}


function goToPrevImage() {
  if (setImageIdx === 0) {
    setImageIdx = images.length - 1;
  } else {
    setImageIdx--;
  }
  setBackgroundImagebox();
  setBackgroundBody();
}

let intervalId = setInterval(goToNextImage, 3000); 

prev.addEventListener("click", () => {
  clearInterval(intervalId); 
  goToPrevImage();
  intervalId = setInterval(goToNextImage, 3000); 
});

next.addEventListener("click", () => {
  clearInterval(intervalId); 
  goToNextImage();
  intervalId = setInterval(goToNextImage, 3000);
});


function setBackgroundImagebox() {
  imageBox.style.backgroundImage = `url(${images[setImageIdx]})`;
}

function setBackgroundBody() {
  main.style.backgroundImage = `url(${images[setImageIdx]})`;
}
