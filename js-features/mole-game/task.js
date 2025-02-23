const countDead = document.getElementById('dead');
const countLost = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.addEventListener('click', function() {
        if (hole.classList.contains('hole_has-mole')){
            countDead.textContent = parseInt(countDead.textContent) + 1;
        } else {
            countLost.textContent = parseInt(countLost.textContent) + 1;
        };

        if (parseInt(countDead.textContent) == 3) {
            alert('Победа !');
            countDead.textContent = 0;
            countLost.textContent = 0;
        } else if (parseInt(countLost.textContent == 2)) {
            alert('Вы проиграли !');
            countDead.textContent = 0;
            countLost.textContent = 0;
        };
    });
}