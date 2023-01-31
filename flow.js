// ATTEMPT FOR ANIMATION

// var hideAnim = {
//     visibility: 'hidden',
//     opacity: 0,
//     filter: "blur(5px)",
//     transform: "translateX(-100%)",
//     transition: "all 1s"
// }

// homeScreen -> menu -> different methods 
$(".btn-homescreen").click(function () {
    changeScreen("#homescreen", "#menu");
});

$(".btn-menu").click(function () {
    // console.log(e.target.class);
    if ($(this).hasClass("hoffman")) {
        changeScreen("#menu", "#hoffmanPreq");
    }
    if ($(this).hasClass("kasuya")) {
        changeScreen("#menu", "#kasuyaPreq");
    }
    if ($(this).hasClass("osmotic")) {
        changeScreen("#menu", "#osmoticPreq")
    }
});

$(".btn-next").click(function () {
    if ($(this).hasClass("hoffman")) {
        changeScreen("#hoffmanPreq", "#hoffmanDemo");
    }
    if ($(this).hasClass("kasuya")) {
        changeScreen("#kasuyaPreq", "#kasuyaDemo");
    }
    if ($(this).hasClass("osmotic")) {
        changeScreen("#osmoticPreq", "#osmoticDemo");
    }
});

function changeScreen(prevPage, nextPage) {
    // $(prevPage).addClass("hidden");
    // $(nextPage).removeClass("hidden");
    // $(nextPage).addClass("showAnim");
    $(prevPage).hide();
    $(nextPage).show();
}