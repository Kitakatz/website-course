// Variables
const containerElement = document.getElementById("slider");
const sliderContainerElement = document.getElementById("slider-container");
// const prevButtonElement = document.getElementById("previous-button");
// const nextButtonElement = document.getElementById("next-button");

//global scope
let current = 2;
let margin = 0;
let itemWidth = containerElement.offsetWidth / 3;
let itemLength = sliderContainerElement.children.length;
let timeoutInstance = null;
const sliderItems = [
  { id: "1", imgAlt: "nsx", imgUrl: "https://images.unsplash.com/photo-1624343583006-ce7442701c77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"}, 
  { id: "2", imgAlt: "datson", imgUrl: "https://images.unsplash.com/photo-1617286114183-3de6d981bcd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"}, 
  { id: "3", imgAlt: "silvia", imgUrl: "https://images.unsplash.com/photo-1632119528561-0ef1b290489e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" },
  { id: "4", imgAlt: "miata", imgUrl: "https://images.unsplash.com/photo-1610884461690-e802d880e527?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1325&q=80" }
];
let slidesLength = sliderItems.length; 
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let previousTranslate = 0;
let animationId = undefined;
let currentIndex = 0;

// Assigned event methods.
// prevButtonElement.onclick = prevButton;
// nextButtonElement.onclick = nextButton;
window.onresize = handleOnResize;

sliderItems.forEach(renderSlidesHandler);

[...sliderContainerElement.children].forEach(enableEventListeners);

for (let i = 0; i < sliderContainerElement.children.length; i++) {
  sliderContainerElement.children[i].style.width = itemWidth + "px";
};

//'' string
//within

// Save this just incase i break some code :P
// for (let i = 0; i < sliderContainerElement.children.length; i++) {
//   sliderContainerElement.children[i].style.width = itemWidth + "px";
// };

// function myFunction() {
//   alert("I have been clicked");
// };

// bodyElement.addEventListener("mouseover", myFunction);
{/* <div class="number">
<div> ${slide.id} </div>
<span> ${width} </span>
</div> */}
// //addEventlistener("mouseover, or click")

//scope and inherentence