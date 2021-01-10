
//CREACION HTML
var texto="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?";

var parrafo1=$('<p>').html(texto);
var parrafo2=$('<p>').html(texto);
var parrafo3=$('<p>').html(texto);

var titulo1=$('<h2>Noticia 1</h2>');
var titulo2=$('<h2>Noticia 2</h2>');
var titulo3=$('<h2>Noticia 3</h2>');

var noticia1=$('<div>').addClass('Noticia1').append(titulo1,parrafo1);
var noticia2=$('<div>').addClass('Noticia2').append(titulo2,parrafo2);
var noticia3=$('<div>').addClass('Noticia3').append(titulo3,parrafo3);

$('body').append(noticia1,noticia2,noticia3);
//a) CAMBIAR TAMAÑO FUENTES
$(noticia1).css('font-size','14px');
$(noticia2).css('font-size','20px');
$(noticia3).css('font-size','8px');

//b) CLICK EN TÍTULO OCULTA NOTICIA
$('h2').click(function(){
    if($(this).siblings().is(":visible")){
        $(this).siblings().hide();
    }
    else{
        $(this).siblings().show();
    }
    
})

//c) y d) HOVER CAMBIA COLOR DE FONDO 
$('p').hover(
    function(){
        $(this).css('color', 'yellow');
    },
    function(){
        $(this).css('color', '');
    })
