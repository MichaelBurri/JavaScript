$(document).ready(function(){
    $('#start').click(function(){
        $('#miDiv').css({'height':'40px','width':'40px','background-color':'red','top':'50px','left':'300px'});
        $('#miDiv').show();
        $('#miDiv').animate({left:'100px'});
        $('#miDiv').animate({backgroundColor:'aqua'});
        $('#miDiv').animate({top:-100})
    });

})