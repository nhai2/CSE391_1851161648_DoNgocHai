$(document).ready(function (){
    var random = Math.floor(Math.random()*1000)
    $("#navigation").children().hover(function (){
        $(this).css({
            "transition": "height 1s",
            "height": random + "px",
            "max-height":"340px",
        })
    });
    $("#navigation").children().mouseout(function(){
        $(this).css({
            "transition": "height 1s",
            "height": "50px",
        })
    })
    
})