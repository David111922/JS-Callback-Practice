const inventory = newInventory()
move(inventory).to(0, 0)
// !why when I add a tree in breaks the code and where is the pine tree adde getting it's position? This changes the z index so green character goes behind tree
// const character = newImage('assets/green-character.gif')
// character.style.position = 'absolute';
// character.style.zIndex = '2';


// const tree1 = newImage('assets/pine-tree.png');
// tree1.style.position = 'absolute';
// tree1.style.zIndex = '4';




// !handleDirectionChange function takes a direction parameter and updates the src attribute of the HTML image element accordingly.

function handleDirectionChange(direction){
    if(direction === null){
        character.src = `assets/green-character/static.gif`
    }
    if(direction === 'west'){
        character.src = `assets/green-character/west.gif`
    }
    if(direction === 'north'){
        character.src = `assets/green-character/north.gif`
    }
    if(direction === 'east'){
        character.src = `assets/green-character/east.gif`
    }
    if(direction === 'south'){
        character.src = `assets/green-character/south.gif`
    }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)


// let direction = null;
// let x =100;
// let y = 250;
// move(character).to(x, y);


// move(character).to(100, 250);


move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)





// setInterval(function(){ 
//     if(direction === 'west'){
//         x = x - 1
//     }
//     if(direction === 'north'){
//         y = y + 1
//     }
//     if(direction === 'east'){
//         x = x + 1
//     }
//     if(direction === 'south'){
//         y = y - 1
//     }
//     character.style.left = x + 'px'
//     character.style.bottom = y + 'px'
// }, 1)




// document.addEventListener('keydown', function(e){
//     if(e.repeat) return;

//     if(e.key === 'ArrowLeft'){
//         direction = 'west'
//     }
//     if(e.key === 'ArrowUp'){
//         direction = 'north'
//     }
//     if(e.key === 'ArrowRight'){
//         direction = 'east'
//     }
//     if(e.key === 'ArrowDown'){
//         direction = 'south'
//     }
// })

// document.addEventListener('keyup', function(e){
//     direction = null
// })


// ! more concise version ???
// document.addEventListener('keydown', function(e) {
//     if (e.repeat) return;

//     switch (e.key) {
//         case 'ArrowLeft':
//             direction = 'west';
//             break;
//         case 'ArrowUp':
//             direction = 'north';
//             break;
//         case 'ArrowRight':
//             direction = 'east';
//             break;
//         case 'ArrowDown':
//             direction = 'south';
//             break;
//     }
// });

// document.addEventListener('keyup', function(e) {
//     direction = null;
// });
