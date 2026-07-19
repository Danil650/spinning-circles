//orbits
const centralOrbit = document.getElementById("central-orbit");
const lowOrbit = document.getElementById("low-orbit");
const midOrbit = document.getElementById("mid-orbit");
const highOrbit = document.getElementById("high-orbit");

const orbits = [lowOrbit, midOrbit, highOrbit]

// constants
const maxOrbitSize = 64;
const minOrbitSize = 8;

// speed
const speed = 30;

function randomPosition() {
    const x = Math.ceil(Math.random() * window.innerWidth);
    const y = Math.ceil(Math.random() * window.innerHeight);    

    // console.log(`x is ${x}\ny is ${y}`);
    return [x, y];
}
function randomSize() {
    return Math.ceil(Math.random() * (maxOrbitSize - minOrbitSize)) + minOrbitSize;
} 

console.log(randomPosition()[0]);

centralOrbit.style.left = `${Math.ceil(window.innerWidth/2)}px`;
centralOrbit.style.top = `${Math.ceil(window.innerHeight/2)}px`;

for (orbit of orbits) {
    orbit.style.left = `${randomPosition()[0]}px`;
    orbit.style.top = `${randomPosition()[1]}px`;
}

function setToMove(){
    // m 0 0 a 1 1 0 0 0 19 0 a 1 1 0 0 0 -19 0
    let postitionX = highOrbit.style.left.split("px")[0];
    let point = `m ${postitionX} ${Math.ceil(window.innerHeight/2)}`;
    let path = `path("${point} a 1 1 0 0 0 ${postitionX} 0 a 1 1 0 0 0 -${postitionX} 0")`;
    highOrbit.style.offsetPath = path;
}

setToMove();
