/*========================
              Declare Functions
=========================*/
const randomNumber = (min, max) => { 
  return Math.random() * (max - min) + min;
} 

const setHabAnimation = (arr) => {
  arr.forEach(x => {
    x.style.cssText += `animation-name: floating; animation-duration: ${randomNumber(3, 8)}s; animation-iteration-count: infinite; animation-timing-function: ease-in-out;`;
  });
}

const setHabPetAnimation = (arr) => {
  arr.forEach(x => {
    x.style.cssText += `margin-right: 2rem; animation-name: floating; animation-duration: ${randomNumber(3, 8)}s; animation-iteration-count: infinite; animation-timing-function: ease-in-out;`;
  });
}

/*========================
                Inject Keyframes
=========================*/
let body = document.querySelector("body");
body.innerHTML += `
<style>
@keyframes floating {
  0% { transform: translate(0,  0rem); }
  50%  { transform: translate(0, ${randomNumber(.5, 1.5)}rem); }
  100%   { transform: translate(0, 0rem); }    
}
</style>
`

/*========================
                  Collect Nodes
=========================*/
let sprites = document.getElementsByClassName("character-sprites");
let currentPets = document.getElementsByClassName("current-pet");


/*========================
               Generate Arrays
=========================*/
let spritesArray = [...sprites];
let currentPetsArray = [...currentPets];


/*========================
              Apply Animation
=========================*/
setHabAnimation(spritesArray);
setHabPetAnimation(currentPetsArray);