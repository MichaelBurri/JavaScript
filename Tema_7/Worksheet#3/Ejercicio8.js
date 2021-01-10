for (let i = 1; i <= 5; i++) {
    $('body').append($('<div>').attr('id','div'+i).css({'background-color':'#'+(i+4)+'0'+(i)+'0'+(i+4)+'0',
    'height':'100px','width':'100px','margin-top':'10px','display':'none'}));
}
$(document).ready(function(){
        $("#div1").fadeIn('slow');
        $('#div2').fadeIn('fast');
        $('#div3').fadeIn(800);
        $('#div4').fadeIn(2000);
        $('#div5').fadeIn(4000);
});