$(document).ready(function(){

// =========================
// Skills Animation
// =========================

$(".bar").each(function(){

let level = $(this).data("level");

$(this).animate({
width: level + "%"
}, 1200);

});

// =========================
// Dark Mode
// =========================

$("#toggleDark").click(function(){

$("body").toggleClass("dark");

});

// =========================
// Hover Effect Cards
// =========================

$(".card").hover(

function(){

$(this).css({
transform:"translateY(-5px)",
transition:"0.3s"
});

},

function(){

$(this).css({
transform:"translateY(0px)"
});

}

);

});