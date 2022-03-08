import loadHamburgerMenu from './modules/navigation/hamburger';
import loadHeroAnimations from './modules/animations/hero'; 
import loadPortfolioAnimations from './modules/animations/portfolio';
import mountScrollOnRevealEventListener from './modules/global/scroll';
// index is implied directory for the above

mountScrollOnRevealEventListener();
loadHamburgerMenu();
loadHeroAnimations();
loadPortfolioAnimations();

// const promise1 = new Promise((resolve, reject) => {
//     // resolve(1);
//     reject(new Error("error from custom promise"));
// });

// promise1.then((response) => {
//     console.log("resolved data", response);
// }).catch((error) => {
//     console.error(error);
// });


// function somePromise() {
//     return 1;
// };

// console.log("somePromise status", somePromise);
// console.log("promise1 state", promise1);

// console.log('someprocess1');

// setTimeout(() => {
//     console.log("Response game from databade...")
// }, 2000);

// console.log('someprocess2');

let data = undefined;

const timer = (Math.random() * 1).toFixed() * 1000;


// console.log('timer', timer);

function getAllGames(inStock) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!inStock) reject(new Error('No games are in stock!'));
            
            resolve([ { id: 1, name: 'fornite'}, {id: 2, name: 'halo'} ]);
        }, timer)
    });
};

// getAllGames().then((response) => {
//     console.log('resolved', response);

//     data = response; 

// }).catch((error) => {
//     console.log('Error Rejected!', error);
// });

// console.log(data);

// --other way to call promises--

// getAllGames()
// .then(() => {

// })
// .catch(() => {
    
// });

// async and await
//try catch blocks

let instagramPostsData = undefined;

async function runAsyncCode() {

    try {      
            const allGames = await getAllGames(true);
        
            console.log(allGames);
            
            instagramPostsData = allGames;
    }
    catch (error) {
        console.error(error);
        console.error(error.message);
    };
};

async function App() {
    //--running async
    await runAsyncCode();
    console.log('instagramPostsData', instagramPostsData);
};

App();