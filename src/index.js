import loadHamburgerMenu from './modules/navigation/hamburger';
import loadHeroAnimations from './modules/animations/hero'; 
import mountScrollOnRevealEventListener from './modules/global/scroll';
// index is implied directory for the above

mountScrollOnRevealEventListener();
loadHamburgerMenu();
loadHeroAnimations();