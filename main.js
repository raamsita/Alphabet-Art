// // -----------------------------Select--- Container--Carousel---Dots--------------------------------------------------------------------------

let container = document.querySelector(".container");
let carousel = document.querySelector(".carousel-img");
let dots = document.querySelectorAll(".dot")
let alphabet;
let i =0;
// for (let i = 65,j=0,k=0; i <= 90; i++,j++,k++) {
//   if(j>=6){
//     j=0;
//   }

// ------------------------------------------Carousel------------------------------------------------------------------------------
// -------------------------------------- Create Carousel show types of image with  three dots-----------------------
let carouselArr = [
  "assets/carouselImage/img3.jpeg",
  "assets/carouselImage/img6.jpeg",
  "assets/carouselImage/img6.jpeg",
  "assets/carouselImage/img7.jpeg"
]
autoplay = setInterval(function(){
  i++;
  let selectedDotId = "#dot" + i;
  let selectedDot = document.querySelector(selectedDotId);
  dots.forEach(dot => dot.style.backgroundColor = "white");
  selectedDot.style.backgroundColor = "black"
  if(i>2)
  i = 0 ;
carousel.setAttribute("src",carouselArr[i])
},1200);

// ---------------------------------------------Create loop--------------------------------------------------------
for (let i = 65,j=0,k=0; i <= 90; i++,j++,k++) {
  if(j>=6){
    j=0;
  }
  
// ---------------------------------------- Create Box Div-----------------------------------------------------------
  alphabet = String.fromCharCode(i);
  let frontDiv = document.createElement("div");
  let backDiv = document.createElement("div")
  container.appendChild(frontDiv);
  container.appendChild(backDiv);
  frontDiv.setAttribute("class", "front-card");
  backDiv.setAttribute("class","back-card");

// ---------------------------------------- Create Text to front Div-----------------------------------------------------------------
 
let text = document.createElement("h1");
text.setAttribute("class", "text");
frontDiv.appendChild(text);
text.innerHTML = alphabet;

// ----------------------------------------Create Image to backDiv--------------------------------------------------------------------

let image =document.createElement("img")
image.setAttribute("src",`assets/newAlphabetImg/${alphabet.toLowerCase()}.png`)
image.setAttribute("class","img");
backDiv.appendChild(image)

// ----------------------------------------- Create Flipcard Div to flip backside---------------------------------------------------------------

let filpcard = document.createElement("div")
filpcard.appendChild(frontDiv);
container.appendChild(filpcard);
filpcard.appendChild(backDiv);
filpcard.setAttribute("class","filp-card");

// -----------------Create Sound with in a array ------------------------------------------------------------------------------------

let soundAll =[
  "apple","ball","cat","dog","elephant","fish","goat","hourse","igloo","joker","kite","lion","monkey","nose","octoups","pig","queen","rocket","snake","tiger","umbrella","van","watermelon","x-ray","yak","zebra"
]

filpcard.addEventListener('click',() =>{
filpcard.classList.toggle("flipped")
// });

// ----------------------------------------- Create Sound ------------------------------------------------------------------------------------

let sound = new SpeechSynthesisUtterance();
sound.text = soundAll[k]
window.speechSynthesis.speak(sound);
});

// ------------------------------------------Create Word in backDiv ------------------------------------------------------------

let word = document.createElement("p");
 word.innerHTML = soundAll[k];
 backDiv.appendChild(word)
 word.setAttribute("class","word");

  // -------------------------------------------BackDiv icons Like ,Expand,Share----------------------------------------------------------
  // ----------------------------------------------faIcon------------------------------------------------------------------------------

  let faIcons = document.createElement("div")
  faIcons.classList.add("fa-icons")
  backDiv.appendChild(faIcons)
  // console.log(faIcons);




  //-------------------------------------------------------------like icon------------------------------------------
  
  let like = document.createElement("i")
  like.classList.add("fa-regular", "fa-heart")
  faIcons.appendChild(like)


  like.addEventListener("click", (event) => {
  like.classList.toggle("fa-solid");
  like.style.color = "red" ;
  event.stopPropagation()
});

  //---------------------------------------------------------expend icon--------------------------------------------
  
  let expend = document.createElement("i")
  expend.classList.add("fa-solid", "fa-arrow-rotate-left");
  faIcons.appendChild(expend)





  //-----------------------------------------------------------share icon---------------------
  let share = document.createElement("i")
  share.classList.add("fa-solid", "fa-share-from-square");
  faIcons.appendChild(share)





// ----------------------------------------Patteern Div------------------------------------------------------
// ------------------------------------------ Create Pattern in frontDiv------------------------------------------------------------------

let patternAll = [
  "pattern1",
  "pattern2",
  "pattern3",
  "pattern4",
  "pattern5",
  "pattern6"
]
frontDiv.classList.add("front-card")
frontDiv.classList.add(patternAll[j])


}
