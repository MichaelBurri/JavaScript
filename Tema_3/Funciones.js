/* 1. Define una función máximo que dados 4 valores devuelva el máximo de ellos.
Llámala con un ejemplo pidiendo los 4 valores al usuario.
*/

//2. Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.Para ello
//define una función “lanzamiento” que devuelva un nº aleatorio entre 1 y 6.
/* function lanzamiento() {
    return Math.floor(Math.random()*6+1);
}
document.write("Ha salido el: "+lanzamiento());
//3. Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
//modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
//de ocurrencias de cada uno de los valores.
function contarLanzamiento() {
    let uno=0,dos=0,tres=0,cuat=0,cinc=0,seis=0;
    for (let i = 0; i < 6000; i++) {
        let num=lanzamiento();
        switch (num) {
            case 1:
                uno++;
            break;
            case 2:
                dos++;
            break;
            case 3:
                tres++;
            break;
            case 4:
                cuat++;
            break;
            case 5:
                cinc++;
            break;
            case 6:
                seis++;
            break;           
        }
    }
    document.write("Uno: "+uno+"<br>Dos: "+dos+"<br>Tres: "+tres+"<br>Cuatro: "+cuat+"<br>Xinco: "+cinc+"<br>Seis: "+seis+"<br>");
}
contarLanzamiento(); */


/* 4. Crea una web para calcular el volumen de una esfera. Para ello diseña una función
que dado el radio de ésta devuelva el volumen.
5. Mejora el ejercicio anterior permitiendo calcular también el área de un circulo. */


//6. Crea una función para calcular potencias de un modo recursivo.
/* function potencia(base,exp) { 
    if (exp===0)
        return 1;
    else if(exp>0)
        return base*potencia(base,exp-1);
}
document.write(potencia(2,4)); */
//7. Crea una función que calcule el factorial de un número dado. Para comprobarlo,
//diseña una web que muestre en forma de tabla el factorial para los valores de 1 a 10. */
function factorial(num) {
    let fact=1;
    for (let i = num; i > 1; i--) {
        fact*=i;        
    }
    return fact;
}
let tabla="<table><caption>Factoriales del 1 al 10</caption>";
for (let i = 1; i < 11; i++) {
    tabla+="<tr><td>"+i+"</td><td>"+factorial(i)+"</td></tr>";    
}
tabla+="</table>";
document.write(tabla);