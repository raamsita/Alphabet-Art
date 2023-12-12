let container = document.querySelector(".container");
let alphabet;
for (let i = 65,j=0; i <= 90; i++,j++) {
  alphabet = String.fromCharCode(i);
  let frontDiv = document.createElement("div");
  let backDiv = document.createElement("div")
  container.appendChild(frontDiv);
  container.appendChild(backDiv);
  frontDiv.setAttribute("class", "front-card");
  backDiv.setAttribute("class","back-card");

  let text = document.createElement("h1");
text.setAttribute("class", "text");
frontDiv.appendChild(text);
text.innerHTML = alphabet;


let image =document.createElement("img")
image .setAttribute("src", `assets/${alphabet.toLowerCase()}.png`)
// image.setAttribute("src",`assets/alphabet img/${alphabet.toLocaleLowerCase()}.png`)
image.setAttribute("class","img");
backDiv.appendChild(image)

let filpcard = document.createElement("div")
filpcard.appendChild(frontDiv);
container.appendChild(filpcard);
filpcard.appendChild(backDiv);
filpcard.setAttribute("class","filp-card");



filpcard.addEventListener('click',() =>{
filpcard.classList.toggle("flipped")
})

}
