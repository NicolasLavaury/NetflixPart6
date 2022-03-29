// right event
function rightScroll(carousel, rightArrow) {

    const scroll = document.querySelector(carousel);

    const right = document.querySelector(rightArrow);

        scroll.scrollLeft += scroll.offsetWidth;
    

}

// left event
function leftScroll(carousel, leftArrow) {

    const scroll = document.querySelector(carousel);

    const left = document.querySelector(leftArrow);
        scroll.scrollLeft -= scroll.offsetWidth;
    

}


var ActionsImg = new Array(
    "assets/Logo/act1.jpg",
    "assets/Logo/act2.jpg",
    "assets/Logo/act3.jpg",
    "assets/Logo/act4.jpg",
    "assets/Logo/act5.jpg",
    "assets/Logo/act6.jpg",
  );
  
  
  
  function aleatoire(){
  
  
    for (let i = 1; i < 6; i++) {
      var randomNum = Math.floor(Math.random() * ActionsImg.length);
      document.getElementById("action" + i.toString()).src = ActionsImg[randomNum];
} 
  }

  window.onload = aleatoire;

 

