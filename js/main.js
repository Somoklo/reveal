// $("main").children().addClass("hidden");
// let easyhidden = $(".hidden").offset().top;

// $(window).scroll(function(){
//     let scrollBottoms = $(window).scrollTop();
//     $(".hidden").each(function(){
//         if(scrollBottoms < easyhidden){
//             $(".hidden").fadeIn();
//         } else {
//             $(".hidden").fadeOut();
//         }
//     })  
// })

$("main").children().addClass("hidden");
let listElement = $(".hidden");

$(window).scroll(function(){
    let scrolling = $(window).scrollTop();
    listElement.each(function(i, element){
        let elementOffset = $(element).offset().top;
        if(scrolling > elementOffset - $(window).height() + 50){
            $(element).addClass("reveal");
            $(element).removeClass("hidden");
        }
    })  
})