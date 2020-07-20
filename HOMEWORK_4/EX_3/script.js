$(document).ready(function(){
    $("#txt-area").keypress(function(){
        var txtInput = $(this).val()
        $(".right p").text(txtInput) 
    })
    $("#new-paragraph").click(function(){
        $("#txt-area").val('').change()
        $(".right p").html('')
    })
    $('#change').click(function(){
        var selectValue = $('#select').val()
        if( selectValue === 'blue'){
            $(".right p").css({
                color: 'blue',
            })
        }
        if( selectValue === 'yellow'){
            $(".right p").css({
                color: 'yellow',
            })
        }
    })
})



