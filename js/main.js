const container_flip = document.querySelector('.flip-card-inner');
container_flip.addEventListener('click', function(flip){
    container_flip.classList.toggle('is-flipped');
})

//This function hightlights the fields in the contact page after they have been filled out
function myFunction(highlight) {
  highlight.style.background = "#def6fc";
}

//The function bigImg() is triggered when the user moves the mouse pointer over the image
//The function normalImg() is triggered when the mouse pointer is moved out of the image

function bigImg(x) {
  x.style.height = "155px";
  x.style.width = "155px";
}

function normalImg(x) {
  x.style.height = "150px";
  x.style.width = "150px";
}


//Get element headline and change to blue on hover

function mouseOver() {
  document.getElementById("demo").style.color = "#005b97";
}

function mouseOut() {
  document.getElementById("demo").style.color = "#f37650";
}


