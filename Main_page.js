const imageList = document.querySelector('.image_list');
const leftButton = document.querySelector('.controls button:nth-child(1)');
const rightButton = document.querySelector('.controls button:nth-child(2)');

let scrollSpeed = 15; // Adjust this value to change the scroll speed
let scrollInterval;

leftButton.addEventListener('mousedown', () => {
    scrollInterval = setInterval(() => {
        imageList.scrollLeft -= scrollSpeed;
    }, 20);
});

leftButton.addEventListener('mouseup', () => {
    clearInterval(scrollInterval);
});

rightButton.addEventListener('mousedown', () => {
    scrollInterval = setInterval(() => {
        imageList.scrollLeft += scrollSpeed;
    }, 20);
});

rightButton.addEventListener('mouseup', () => {
    clearInterval(scrollInterval);
});
