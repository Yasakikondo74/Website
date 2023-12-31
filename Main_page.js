let scrollAmount = 0;
const imageList = document.querySelector('.image_list');
const scrollIncrement = 15; // Increase this value to make the scroll faster
let scrollInterval;

function scrollLeft() {
    if (scrollAmount > 0) {
        scrollAmount -= scrollIncrement;
        imageList.scrollTo({
            left: scrollAmount,
            behavior: 'auto'
        });
        scrollInterval = requestAnimationFrame(scrollLeft);
    } else {
        cancelAnimationFrame(scrollInterval);
        document.querySelector('button:nth-child(1)').style.backgroundImage = "url('img/left_end.png')";
    }
}

function scrollRight() {
    if (scrollAmount < imageList.scrollWidth - imageList.clientWidth) {
        scrollAmount += scrollIncrement;
        imageList.scrollTo({
            left: scrollAmount,
            behavior: 'auto'
        });
        scrollInterval = requestAnimationFrame(scrollRight);
    } else {
        cancelAnimationFrame(scrollInterval);
        document.querySelector('button:nth-child(2)').style.backgroundImage = "url('img/right_end.png')";
    }
}

document.querySelector('button:nth-child(1)').addEventListener('mousedown', () => {
    scrollInterval = requestAnimationFrame(scrollLeft);
});

document.querySelector('button:nth-child(1)').addEventListener('mouseup', () => {
    cancelAnimationFrame(scrollInterval);
});

document.querySelector('button:nth-child(1)').addEventListener('mouseleave', () => {
    cancelAnimationFrame(scrollInterval);
});

document.querySelector('button:nth-child(2)').addEventListener('mousedown', () => {
    scrollInterval = requestAnimationFrame(scrollRight);
});

document.querySelector('button:nth-child(2)').addEventListener('mouseup', () => {
    cancelAnimationFrame(scrollInterval);
});

document.querySelector('button:nth-child(2)').addEventListener('mouseleave', () => {
    cancelAnimationFrame(scrollInterval);
});
