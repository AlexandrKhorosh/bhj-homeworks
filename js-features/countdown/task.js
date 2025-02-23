const countdown = function() {
    const setTimer = document.getElementById("timer");
    setTimer.textContent -= 1;

    if (setTimer.textContent == 0) {
        alert("Вы победили в конкурсе!");
    }
}

setInterval(countdown, 1000);