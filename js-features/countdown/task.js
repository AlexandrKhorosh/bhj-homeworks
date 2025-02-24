const countdown = setInterval(function() {
    const setTimer = document.getElementById("timer");
	setTimer.textContent -= 1;
	
	if (setTimer.textContent == 0) {
        alert("Вы победили в конкурсе!");
		clearInterval(countdown);
	}
}, 1000);