
var slides;

var slideIndex = 1;
var clss="mySlides";
var clss2= "mySlides2";
var clss3= "mySlides3";
showSlides(slideIndex, clss);
var panel;

//Botón de menú desplegable
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
     panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


// Controles siguiente y anterior
function plusSlides(n, styl) {
  showSlides(slideIndex += n, styl);
}

// Thumbnail image controls
/*function currentSlide(n) {
  showSlides(slideIndex = n);
}
*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function showSlides(n, clss) {
   i;
   slides = document.getElementsByClassName(clss);
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function esc(ide){
  var img;
  var desc;
  var botonNx;
  var botonPre;
  var num;
  var j;
  
  //var slde;
  img = document.getElementById(ide);
  slde = document.getElementById("slideCont")
  desc = document.getElementsByClassName("description");
  botonNx =document.getElementsByClassName("next");
  botonPre =document.getElementsByClassName("prev");
  num =document.getElementsByClassName("numbertext");  
  img.className +="hide";
  //desc.className +="hide";
  slde.className +="hide";

  for (j = 0; j < botonNx.length; j++) {
      botonNx[j].style.display = "none";
      botonPre[j].style.display = "none";
      
      //console.log("description " +desc[j]);
  }
  for (j = 0; j < desc.length; j++) {
		desc[j].style.display = "none";
  }
  for (j = 0; j < num.length; j++) {
		num[j].style.display = "none";
  }
  
  showInfo();

//var content2 = //document.getElementById("slideCont2");
//content2.className+="show";
  //alert(ide);
}

function showInfo(){
	var j;
  var content2 =document.getElementsByClassName("slideshow-container2");
//  var content2 = document.getElementById("slideCont2");
  var slides2 = document.getElementsByClassName("mySlides2");
  var info = document.getElementsByClassName("contentInfo");
  var nxt = document.getElementsByClassName("next2");
  var prv = document.getElementsByClassName("prev2");
  //var panel = document.getElementsByClassName("panel");
  content2.className += "show";

    for (j = 0; j < content2.length; j++) {
      content2[j].style.display = "block";
      slides2[j].style.display = "block";
      content2[j].style.display = "block";
     // panel[j].style.display = "block";
    }

 	for (j = 0; j < prv.length; j++) {
    	nxt[j].style.display = "block";
    	prv[j].style.display = "block";
    }
}


var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

img1.addEventListener("click", function() {

  esc("img1");
  showInfo();
  });
btn1.addEventListener("click", function() {

  esc("img1");
  showInfo();
  });


img2.addEventListener("click", function() {

  esc("img2");
  showInfo();
  });
btn2.addEventListener("click", function() {

  esc("img2");
  showInfo();
  });


img3.addEventListener("click", function() {

  esc("img3");
  showInfo();
  });
btn3.addEventListener("click", function() {

  esc("img3");
  showInfo();
  });


/*
var btni = document.getElementsByClassName("btnInfo");
for (i = 0; i < btni.length; i++) {
  btni[i].addEventListener("click", function() {
    
  });
}*/

var modImg1 = document.getElementById("modImg1");
var modImg2 = document.getElementById("modImg2");
var modImg3 = document.getElementById("modImg3");


modImg1.addEventListener("click", function() {
  //document.getElementById("galeria1").style.display="block";
//alert("hola");
var k;
var shslides;
shslides = document.getElementsByClassName("mySlides3");
/*
for (k = 0; k <shslides.length; k++) {
  shslides[k].style.display="block";
}*/
shslides[0].style.display="block";

  });
modImg2.addEventListener("click", function() {
//document.getElementById("miModal").style.display="block";
var shslides;
shslides = document.getElementsByClassName("mySlides3");
/*
for (k = 0; k <shslides.length; k++) {
  shslides[k].style.display="block";
}*/
shslides[1].style.display="block";
  });
modImg3.addEventListener("click", function() {

//document.getElementById("miModal").style.display="block";
var shslides;
shslides = document.getElementsByClassName("mySlides3");
/*
for (k = 0; k <shslides.length; k++) {
  shslides[k].style.display="block";
}*/
shslides[2].style.display="block";
  });