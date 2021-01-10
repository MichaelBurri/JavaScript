$(document).ready(function(){
    $("#start").click(function(){
      var div = $("div");
      div.animate({height: '300px', opacity: '0.4'}, "slow");
      div.animate({width: '300px', opacity: '1'}, "fast");
      div.animate({height: '100px', opacity: '0.2'}, "slow");
      div.animate({width: '100px', opacity: '1'}, "fast");
    });
    $("#stop").click(function(){
        var div = $("div");
        div.clearQueue();//Para quitar funciones de queue()
        div.stop();//Para animaciones
    });
  });