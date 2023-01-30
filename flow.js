// homeScreen -> menu -> different methods 

$(".btn-homescreen").click(function () { 
    $("#homescreen").addClass("hidden");
    $("#menu").removeClass("hidden");
});

$(".btn-menu").click(function (e) { 
    // console.log(e.target.class);
    if ($(this).hasClass("hoffman")) {
        $("#menu").addClass("hidden");
        $("#hoffmanPreq").removeClass("hidden");
    }
    console.log($(this).hasClass("hoffman"));
});