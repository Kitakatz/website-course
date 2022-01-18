function delayAnimation(node, className, delayTime) {
    setTimeout(() => {
        node.classList.remove(className);
    }, delayTime);
};


function loadHeroAnimations() {
    console.log('Hero animations loaded!');
    // const animateHeadingElement = document.getElementById('animateHeading');
    // const animateParagraphElement = document.getElementById('animateParagraph');
    // const animateButtonsElement = document.getElementById('animateButtons');


    // window.addEventListener('scroll', function() {
    //     console.log('scroll listener is active');
    // });

    // delayAnimation(animateHeadingElement, 'opacity', 500);
    // delayAnimation(animateParagraphElement, 'opacity', 1000);
    // delayAnimation(animateButtonsElement, 'opacity', 1500);

};

export default loadHeroAnimations;


/* For next class */

// const heroAnimation = {
//   isTriggered: false
// };

// window.addEventListener('scroll', function() {
//     const node2 = document.getElementById('node2');
//     const scrolled = Math.ceil(window.scrollY);
//     const elementOffSet = Math.ceil(window.pageYOffset + node2.getBoundingClientRect().top);

//     if (scrolled >= elementOffSet) {
//       console.log('Animation past that point');
//       heroAnimation.isTriggered = true;
//       console.log('isTriggered: ', heroAnimation);
//     } else {
//       heroAnimation.isTriggered = false;
//       console.log('isTriggered: ', heroAnimation);
//     }

//     console.log('scrolled', scrolled);
//     console.log('elementOffSet', elementOffSet);
//   });