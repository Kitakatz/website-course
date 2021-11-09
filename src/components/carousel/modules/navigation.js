function prevButton() {
  if (current === 2) return;

  current = current - 1;

  margin = margin + itemWidth;
  sliderContainerElement.style.marginLeft = margin + 'px';

  console.log(current);
};

function nextButton() {
  if (current = sliderItems) sliderItems.forEach(renderSlidesHandler);

  current = current + 1;

  margin = margin - itemWidth;
  sliderContainerElement.style.marginLeft = margin + 'px';

  console.log(current);
};

function renderSlidesHandler(slide, index, array) {
  const liNode = document.createElement("li");
  const width = itemWidth;

  liNode.innerHTML =`

    <img src=${slide.imgUrl} alt=${slide.imgAlt}/>
  `;

  sliderContainerElement.appendChild(liNode);
};

function enableEventListeners(slide, index, array) {
  const sliderImageElement = slide.querySelector("img");
  
  sliderImageElement.addEventListener('dragstart', (event) => event.preventDefault());

  // Mouse Events
  sliderImageElement.addEventListener('mousedown', touchStart(index));
  sliderImageElement.addEventListener('mousemove', touchMove);
  sliderImageElement.addEventListener("mouseup", touchEnd);

  // Touch Events
  sliderImageElement.addEventListener('touchstart', touchStart(index));
  sliderImageElement.addEventListener('touchmove', touchMove);
  sliderImageElement.addEventListener('touchEnd', touchEnd);
};

function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
};

function animation() {
  sliderContainerElement.style.tranform = `translateX(${currentTranslate}px)`;
};

function touchStart(index) {
  return function(event) {
    currentIndex = currentIndex;
    isDragging = true;
    startPosition = getPositionX(event);
    animationId = requestAnimationFrame(animation);
  };
};

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event); 
    currentTranslate = previousTranslate + (currentPosition - startPosition);
  };
};

function touchEnd() {
  if (!isDragging) return;

  isDragging = false;
  cancelAnimationFrame(animationId);
  const movedBy = currentTranslate - previousTranslate;

  if (movedBy > -100 && movedBy < 100) resetThreshold(movedBy);

  if ( ( movedBy <= -100) && (current < slidesLength -1) ) incrementPositionByIndex();

  if( (movedBy >= 100) && (currentIndex > 0) ) decrementPositionByIndex();

  setPositionByIndex();
  setSliderPosition();
};

function setSliderPosition() {
  sliderContainerElement.style.transform = `translateX(${currentTranslate}px)`; //-3 -2 -1 0 1 2 3
};

function setPositionByIndex() {
  currentTranslate = currentIndex * -itemWidth;
  previousTranslate = currentTranslate;
};

function resetThreshold() {
  console.warn(`Does not surpass threshold of ${movedBy}, returning slide back to default start position.`)
  currentTranslate = previousTranslate;
  sliderContainerElement.style.transform = `translateX(${currentTranslate}px)`;
};

function resetLeftThreshold() {
  currentTranslate = (sliderItems.length - 3) * -itemWidth; //test
  previousTranslate = currentTranslate;
};

function resetRightThreshold() {
  currentTranslate = 0 * -itemWidth; //test
  previousTranslate = currentTranslate;
};

function incrementPositionByIndex() {  
  current = current + 1;
  currentIndex = currentIndex + 1;
  console.log('currentIndex', currentIndex);
};

function decrementPositionByIndex() {
  current = current - 1; 
  currentIndex = currentIndex - 1;
  console.log('currentIndex', currentIndex);
};