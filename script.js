


var e = new Audio("Audio/ahh.wav");
var imagesArray = ["imagesoferic/eric.jpg","imagesoferic/real.png","imagesoferic/erickk.jpg","imagesoferic/erickkk.jpg","imagesoferic/real.png","imagesoferic/erickk.jpg","imagesoferic/erickkk.jpg","imagesoferic/real.png","imagesoferic/erickk.jpg","imagesoferic/erickkk.jpg"];

function displayImage(){
  var num = Math.floor(Math.random() * 10);
  document.canvas.src = imagesArray[num];
  blacko()
}


var imagesArra = ["imagesoferic/ko.jpg", "imagesoferic/image.jpg"];

function displayIm(){
  var num = Math.floor(Math.random() * 2);
  document.canvas.src = imagesArra[num];
  blacko()
}


b1 =document.getElementById("yel")
b2 =document.getElementById("yell")

function black(el){
 if(document.canvas.src.match("imagesoferic/eric.jpg") ){
  b1.classList.add("opaque");
  b2.classList.add("opaque");	
   e.play()
} else {
}
}
function blacko(el){
 if(document.canvas.src.match("imagesoferic/eric.jpg") ){
	b1.classList.add("imgo");
	 setTimeout(function () {
	 b2.classList.add("opaque");
	 document.getElementById("yelp").classList.add("opaque");
	 document.getElementById("yely").classList.add("opaque");
		}, 4000);
 } else {

		

	}

}

