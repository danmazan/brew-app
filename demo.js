let [miliseconds, seconds, minutes] = [0, 0, 0];
let timerRef = $(".timer");
let int = null;




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
    // let ms = miliseconds < 10 ? "00" + miliseconds : miliseconds < 100 ? "0" + miliseconds : miliseconds;

    timerRef.text(m + " : " + s);

    changeInstruction(m, s);
}

function changeInstruction(minute, second) {

    //TODO: Would need to refactor this for different recipes
    if (minute == 00 && second == 10) {
        $(".instruction").html("<p>Gently swirl</p>");
    }
    if (minute == 00 && second == 15) {
        $(".instruction").html("<p>Bloom</p>");
    }
    if (minute == 00 && second == 45) {
        $(".instruction").html("<p>Pour up to <em class='grams'>100g</em> total</p>");
    }
    if (minute == 01 && second == 00) {
        $(".instruction").html("<p>Pause</p>");
    }
    if (minute == 01 && second == 10) {
        $(".instruction").html("<p>Pour up to <em class='grams'>150g</em> total</p>");
    }
    if (minute == 01 && second == 20) {
        $(".instruction").html("<p>Pause</p>");
    }
    if (minute == 01 && second == 30) {
        $(".instruction").html("<p>Pour up to <em class='grams'>200g</em> total</p>");
    }
    if (minute == 01 && second == 40) {
        $(".instruction").html("<p>Pause</p>");
    }
    if (minute == 01 && second == 50) {
        $(".instruction").html("<p>Pour up to <em class='grams'>250g</em> total</p>");
    }
    if (minute == 02 && second == 00) {
        $(".instruction").html("<p>Gently swirl</p>");
    }
    if (minute == 02 && second == 05) {
        $(".instruction").html("<p>Wait until the coffee drains out.</p>");
    }
    if (minute == 05){
        $(".instruction").html("<p>Your coffee should be ready by now</p>");
        clearInterval(int);
    }
}




$(".btn-start").click(function () {
    if (int !== null) {
        clearInterval(int);
    }
    $(".btn-start").attr("disabled", "disabled");
    int = setInterval(displayTimer, 10);
});

// $(".btn-stop").click(function () {
//     clearInterval(int);
// })

$(".btn-restart").click(function () {
    clearInterval(int);
    [miliseconds, seconds, minutes] = [0, 0, 0];
    timerRef.text("00 : 00");
    $(".instruction").html("<p>Pour <em class='grams'>50g</em> of water to bloom</p>");
    $(".btn-start").removeAttr("disabled");
});
