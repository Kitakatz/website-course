const animationState = {
    hasAnimated: false
};

function delayAnimation(node, classname, delayTime) {
    setTimeout(() => {
        node.classList.remove(classname);
    }, delayTime);
};

function delayAnimations(nodes , delayTime) {
    setTimeout(() => {
        for ( let index = 0; index < nodes.length; index++ ) {
            delayAnimation(nodes[index], 'opacity', index * 200)
        };
    }, delayTime);
};

function loadServiceAnimations() {
    if ( animationState.hasAnimated ) return;

    console.log('service animations loaded');
    animationState.hasAnimated = !animationState.hasAnimated;

    const serviceHeadingElement = document.getElementById('serviceHeading');
    const serviceSubHeadingElement = document.getElementById('serviceSubHeading');
    const serviceContentElement = document.getElementById('serviceContent');
    const cardServiceElements = document.querySelectorAll('#card-services');

    delayAnimation(serviceHeadingElement, 'opacity', 0);
    delayAnimation(serviceSubHeadingElement, 'opacity', 500);
    delayAnimation(serviceContentElement, 'opacity', 1000);
    delayAnimations(cardServiceElements, 1500);
};

export default loadServiceAnimations;

// Example looping backwords

// const nodes = [...arrayWithItems]

// for (let index = nodes.length; index > nodes.length; index--) {
  // delayAnimation(nodes[index], 'opacity', index * 100); 
// }