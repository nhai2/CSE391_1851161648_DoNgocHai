$(document).ready(function () {
    $(".circles").click(function () { 
        $(".circles").toggleClass("newCircles"); 
    })
    
    $(".squares").click(function () { 
        $(".squares").toggleClass("halfSquares"); 
    })

    $(".rectangles").click(function () { 
        $(".rectangles").toggleClass("moveRectangles"); 
    })


})