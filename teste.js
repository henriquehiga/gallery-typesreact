direction = '';

document.addEventListener('keydown', e => {
    if(e.keyCode == 37 ) console.log("left");
    if(e.keyCode == 38) console.log("up");
    if(e.keyCode == 39) console.log("right");
    if(e.keyCode == 40) console.log("down");
})