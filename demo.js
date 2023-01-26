let [miliseconds, seconds, minutes] = [0, 0, 0];
let timerRef = document.querySelector(".timer");
let int = null;

document.querySelector(".btn-start").addEventListener("click", function () {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.querySelector(".btn-stop").addEventListener("click", function () {
    clearInterval(int);
})

document.querySelector(".btn-restart").addEventListener("click", function () {
    clearInterval(int);
    [miliseconds, seconds, minutes] = [0, 0, 0];
    timerRef.innerHTML = "00 : 00 : 000";
})

function displayTimer() {
    miliseconds += 10;
    if (miliseconds === 1000) {
        miliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = miliseconds < 100 ? "0" + miliseconds : miliseconds;

    timerRef.innerHTML = m + " : " + s + " : " + ms;
}


