const image = document.getElementById('cookie');
const clickCounter = document.getElementById('clicker__counter'); 

function sizeImage() {
    clickCounter.textContent = parseInt(clickCounter.textContent) + 1;
    if (image.width == 200) {
        image.width = 100;
        image.hieght = 100;
    } else {
        image.width = 200;
        image.hieght = 200;
    }
}

image.onclick = sizeImage;