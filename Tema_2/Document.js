//1. Crea una p gina con una serie de enlaces q á ue realicen lo que se pide en
//los siguientes apartados:
//a) escribe en el documento la fecha de la última actualización.
//b) muestra la URL desde la cual se ha activado el enlace que ha llevado al
//usuario hasta el documento actual.
//c) muestra el título del documento actual
//d) muestra la dirección URL completa.
/* e) Un documento se abre automáticamente cuando empieza a cargarse y se
cierra cuando termina de hacerlo. Así pues, si deseamos escribir en un
documento sin sobreescribir su contenido, deberemos hacerlo antes de que
éste termine de cargar. Si lo hacemos después, sobreescribiremos su
contenido. Implementa dos ejemplos que lo demuestren */


//Ejercicio 2. Crea una página que contenga varios enlaces, imágenes y
//anclas de ejemplo y añade una serie de enlaces que realicen lo siguiente:
//a)Muestra el número de anclas que tiene el documento
//b)Muestra el texto dentro del tag del primer ancla(innerHTML).
var piedra="<img id='PIEDRA' src='https://www.tekcrispy.com/wp-content/uploads/2018/11/Herramientas-de-Piedra-P.jpg' alt='No' height='269' width='269' >";
var tijera="<img id='TIJERA' src='https://images-na.ssl-images-amazon.com/images/I/51NpSENy9iL._AC_SL1200_.jpg' alt='No' height='269' width='269'>";
var papel="<img id='PAPEL' src='https://static.nationalgeographic.es/files/styles/image_3200/public/toilet-paper-promo.jpg?w=710&h=474' alt='No' height='269' width='269'>";
document.write(piedra+tijera+papel);
var enlace1="<br><a href='https://developer.mozilla.org/en-US/docs/Web/API/Navigator'>enlace 1</a>";
var enlace2="<br><a href='https://translate.google.es/'>enlace 2</a>";
document.write(enlace1+enlace2);
//c)Muestra el número de imágenes del documento
console.log("número de imágenes: "+document.images.length);
//d)Muestra la id de la primera imagen
console.log("id imagen 1: "+document.images[0].id);
//e)Muestra el número de enlaces del documento
console.log("número de enlaces: "+document.links.length);
//f)Cambia el título del documento
console.log(document.title);
console.log(document.title="Nuevo título");
console.log(document.title);

