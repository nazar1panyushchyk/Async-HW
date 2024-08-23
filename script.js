const box = document.querySelector('.box');

// task1:
let timer = 0

let interval = setInterval(() => {
    timer++
    console.log(timer);

    if(timer >= 5) {
        clearInterval(interval);
    }

    // task2:
    if(timer === 3) {
        box.style.backgroundColor = 'green';
    } else if (timer === 4) {
        box.style.width = '200px';
        box.style.height = '200px';
    }
    
}, 1000); 
