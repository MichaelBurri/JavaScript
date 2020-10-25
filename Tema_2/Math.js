//Ejercicio 1
/* document.write(Math.random());
document.write("<br>"+((Math.random()*100)+100));
num1=parseInt(prompt("Num1"));
num2=parseInt(prompt("Numero 2: "));
document.write("<br>"+((Math.random()*(num2-num1)+num1))); */

//Ejercicio 5. Crea una web para resolver ecuaciones de segundo grado. 
//Deberá pedir por lo tanto los coeficientes y mostrar las soluciones.
/* a=parseInt(prompt("Coeficiente de x^2: "));
b=parseInt(prompt("Coeficiente de x: "));
c=parseInt(prompt("Coeficiente independiente: "));
var disc=Math.pow(b, 2)-4*a*c;
document.write("Solución 1:"+(-b+Math.sqrt(disc))/(2*a));
document.write("<br>Solución 2:"+(-b-Math.sqrt(disc))/(2*a)); */

//Ejercicio 7. Crea una web que genere una tabla con dos columnas. En la primera
//un número ascendente y en la otra el valor de su seno.

/* function crearTabla(num) {
    document.write("<table width='100px' height='50px' border='1' cellpadding='20xp'>");
    document.write("<tr>");
    for (let i = 0; i < 2; i++) {
        document.write("<td>");
            if (i===0) {
                document.write(Math.round(num*180/Math.PI));                
            }
            else if (i===1) {
                document.write(Math.round(Math.sin(num)*1000)/1000);                
            }
        document.write("</td>");    
    }
    document.write("</tr>");
    document.write("</table>");
    num=num+(1/6)*Math.PI;
    setTimeout(function(){crearTabla(num)},1000);
}
crearTabla(0); */

//Ejercicio 8. Crea una web en la que cada vez que se accede se muestre una 
//imagen (de modo aleatorio) de entre 3 posibles.
var piedra="<img src='https://www.tekcrispy.com/wp-content/uploads/2018/11/Herramientas-de-Piedra-P.jpg' alt='No' height='269' width='269' >";
var tijera="<img src='https://images-na.ssl-images-amazon.com/images/I/51NpSENy9iL._AC_SL1200_.jpg' alt='No' height='269' width='269'>";
var papel="<img src='https://static.nationalgeographic.es/files/styles/image_3200/public/toilet-paper-promo.jpg?w=710&h=474' alt='No' height='269' width='269'>";
var imagen;

function PPT() {
    var num=parseInt((Math.random()*3)+1);

    switch (num) {
        case 1:
            imagen=piedra;
            break;
        case 2:
            imagen=tijera;
            break;
        default:
            imagen=papel;
            break;
}
document.write(imagen);
}

PPT(); PPT();