// import Leaf from "./leaf.js";

// const countOfLeaf = 10;
// const startY = -500;
// const startSize = 20;
// const sizeBias = 10;
// const maxRotateSpead = 10;
// const maxFallingSpead = 10;
// const startFallingSpead = 1;
// const maxBias = 10;


// let arrayOfLeaf = [];

// const container = document.querySelector('#leafContainer');

// const width = container.clientWidth;
// const height = container.clientHeight;

// const YPosDelete = height + startSize * 2;
// console.log(YPosDelete);


// for (let i = 0; i < countOfLeaf; i++){
//     let leaf = new Leaf(
//         Math.random(width),
//         -(Math.random(startY) - startSize - sizeBias),
//         startSize + Math.random(sizeBias),
//         Math.random(maxRotateSpead),
//         startFallingSpead + Math.random(maxFallingSpead),
//         Math.random(maxBias)
//     );

//     arrayOfLeaf.push(leaf);
// }

// console.log(arrayOfLeaf);

// function move(){
//     arrayOfLeaf.forEach((element) =>{
//         element.move();
//     });

//     arrayOfLeaf = arrayOfLeaf.filter((e) => e.posY < YPosDelete);

//     requestAnimationFrame(move);
//     console.log(arrayOfLeaf);
    
// }

// requestAnimationFrame(move);