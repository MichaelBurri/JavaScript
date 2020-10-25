//1.-­‐ crea un script que pregunte tu nombre, apellidos y tu edad y los muestre en la página web en párrafos distintos. 
/* var nombre=prompt("Su nombre: ");
var apellidos=prompt("Sus apellidos: ");
var edad=parseInt(prompt("Su edad: "));
document.write("Se llama "+nombre+" "+apellidos+" y tiene "+edad+" años"); */

//3.-­‐ crea un script que muestre en una ventana emergente “hola” y tu nombre (pidiéndolo anteriormente) utilizando concatenación de cadenas. Se concadena cadenas utilizando el símbolo “+”. 
/* var nombre=prompt("Su nombre: ");
alert("Hola "+nombre); */

//4.-­‐ crea un script que pida al usuario su edad, nombre, apellidos y ciclo que estudia, y muestre esa información en pantalla en una ventana emergente.
/* var nombre=prompt("Su nombre: ");
var apellidos=prompt("Sus apellidos: ");
var edad=parseInt(prompt("Su edad: "));
var estudio=prompt("¿Qué estudias niño?");
alert("Se llama "+nombre+" "+apellidos+" y tiene "+edad+" años. Estudia "+estudio); */


//IF
//1.-­‐ crea un script que determine si un número introducido por el usuario es par. 
/* var num=parseInt(prompt("Numelo?: "));
if(num%2==0)
    alert("Es par");
else
    alert("Es impar"); */

//2.-­‐ crea un script que reciba la edad de un usuario y determine si es mayor de edad.
/* var edad=parseInt(prompt("Su edad: "));
if (edad>=18)
    alert("Es mayor de edad");
else
    alert("Es menor"); */
   
//3.-­‐ crea un script que reciba la edad de un usuario, y su localidad de nacimiento y muestre en pantalla “Enhorabuena” a los usuarios de más de 25 años de Madrid. 
/* var edad=parseInt(prompt("Su edad: "));
var prov=prompt("Su localidad de nacimiento: ");
if (edad>=25 && prov=="Madrid")
    alert("Congratulations, you played yourself");
else
    alert("NOPE"); */

//4.-­‐ crea un script que pida un número al usuario, y si ese número es superior a 100 le aplique un descuento del 15%, mostrando el nuevo número en pantalla. 
/* var num=parseInt(prompt("Numero: "));
if (num>100)
    alert("Con el descuento aplicado asciende a "+0.85*num)
else
    alert("No tiene descuento: "+num); */

//5.-­‐ crea un script que pregunte al usuario por su nombre, y conteste “Bienvenido” o “Bienvenida” según si el nombre introducido es de hombre o de mujer (nota: realízalo sólo para los nombres: Pablo, Ana, Eduardo y Clara).
/* var nombre=prompt("Su nombre: ");
if (nombre=="Eduardo"||nombre=="Pablo")
    alert("BienvenidOoooo");
else if (nombre=="Clara"||nombre=="Ana")
    alert("BienvenidAaaaaaa");
else 
    alert("Lo siento tu nombre no existe."); */

//6.-­‐ crea un script que pida a un usuario dónde vive; si vive en Madrid y tiene entre 18 y 30 años, el script debe mostrar en pantalla que el usuario puede acceder al carnet de empresarios emprendedores.
/* var edad=parseInt(prompt("Su edad: "));
var prov=prompt("Su localidad: ");
if (edad>=18 && edad<30 && prov=="Madrid")
    alert("Congratulations, you played yourself Empresario Emprendedor");
else
    alert("baIa baia"); */

//IFELSE
//1.-­‐ crea un script que pida al usuario su nombre y apellidos. Si el nombre es “Ricardo”, debe mostrar en pantalla los apellidos; si el nombre no es “Ricardo”, debe escribir en el documento HTML los apellidos. 
/* var nombre=prompt("Su nombre: ");
var apellidos=prompt("Sus apellidos: ");
if (nombre=="Ricardo")
    alert(apellidos);
else
    document.write(apellidos); */

//2.-­‐ crea un script que reciba la edad de un usuario y determine si puede jubilarse o no (la jubilación se alcanza con 67 años). 
/* var edad=parseInt(prompt("Su edad: "));
if (edad>=67)
    alert("A jubilarse!");
else
    alert("Nanai, a trabajar"); */

//3.-­‐ Crea un script que pregunte la edad, y determine si debes estar en el jardín de infancia (menores de 5 años), en primaria (entre 6 y 11), en la ESO (entre 12 y 16), en Bachillerato o Ciclos (entre 17 y 21) o en la Universidad (más de 21). 
/* var edad=parseInt(prompt("Su edad: "));
if (edad<=5)
    alert("Jardin de infancia");
else if (edad<=11)
    alert("Primaria"); 
else if (edad<=16)
    alert("ESO"); 
else if (edad<=21)
    alert("Bachillerato/Ciclos"); 
else 
    alert("Uni?");  */

//4.-­‐ Crea un script que pregunte al usuario el número de hermanos que tiene y una cantidad. En el caso de que el usuario tenga más de tres hermanos, se mostrará la cantidad con un 15% de descuento. Si el usuario tiene menos de tres hermanos, se mostrará la cantidad con un 5% de descuento. Si no tiene hermanos se mostrará la cantidad sin descuento. 
/* var hermanos=parseInt(prompt("numero de hermanos: "));
var cantidad=parseInt(prompt("Dineros: "));
if (hermanos>=3)
    alert("Cantidad: "+0.85*cantidad);
else if(hermanos>=1)
    alert("Cantidad: "+0.95*cantidad);
else if(hermanos<1)
    alert("Cantidad: "+cantidad); */

//5.-­‐ Crea un script que recoja la nota de dos exámenes y dos trabajos y determine si la media es superior a 5 para aprobar la asignatura (75% exámenes y 25% trabajos) y 4.5 en todos ellos.
/* var exam1=parseFloat(prompt("Nota Examen 1: "));
var exam2=parseFloat(prompt("Nota Examen 2: "));
var trab1=parseFloat(prompt("Nota Trabajo 1: "));
var trab2=parseFloat(prompt("Nota Trabajo 2: "));
if(exam1>=4.5 && exam2>=4.5 && trab1>=4.5 && trab2>=4.5){
    if(((0.75*((exam1+exam2)/2)+0.25*(trab1+trab2)/2))>=5)
        alert("has aprobado.");
    else    
        alert("AL BAR");}
else
    alert("FAILED"); */

//SWITCH
//1.-­‐ Crea un script que pregunte al usuario por el nombre de un mes, y muestre el número de días que tiene el mes. 
/* var mes=prompt("Mes:");
var dias;
switch (mes) {
    case "Enero":
        dias=31;
        break;
    case "Febrero":
        dias=28;
        break;
    case "Marzo":
        dias=31;
        break;
    case "Abril":
        dias=30;
        break;
    case "Mayo":
        dias=31;
        break;
    case "Junio":
        dias=30;
        break;
    default:dias=31;
        break;
}
document.write(mes+" tiene "+dias+" días."); */

//2.-­‐ Crea un script que pregunte al usuario por un número, y determine si es par, si es múltiplo de tres, y si es múltiplo de 5.
/* var num=parseInt(prompt("Numero plz: "));
if (num%2==0) {
    alert("Es par.")
}
if (num%3==0) {
    alert("Es múltiplo de 3.")
}
if (num%5==0) {
    alert("Es múltiplo de 5.")
}
 */

 //3.-­‐ Crea un script que pida al usuario dos números y una operación (que puede ser el carácter +, -­‐, * o /). El script debe devolver el resultado de la operación seleccionada por el usuario.
 /* var num1=parseInt(prompt("Numero 1: "));
 var num2=parseInt(prompt("Numero 2: "));
 var opcion=prompt("Elija una operación:\n Suma (+)\n Resta (-)\n Producto (*)\n División (/) ");
 switch (opcion) {
     case '+':
        document.write("La suma es "+(num1+num2));
         break;
    case '-':
        document.write("La resta es "+(num1-num2));
         break;
    case '*':
        document.write("El producto es "+(num1*num2)); 
         break;
    case '/':
        document.write("La división es "+(num1/num2)); 
         break;     
 
     default:document.write("NAN");
         break;
 } */

 //BUCLES
 //1.-­‐ Crea un script que muestre en la página web todos los números desde el uno hasta el 10, cada uno de ellos separado por una línea (<hr>) 
/* for (let i = 0; i < 10; i++) {
    document.write((i+1)+"<hr>");    
} */

//2.-­‐ Crea un script que pida al usuario un número, e imprima en el documento HTML todos los números desde el número introducido por el usuario hasta el 100. 
/* let num=parseInt(prompt("Numero: "));
for (let i = num; i <= 100; i++) {
    document.write(i+"<br>");
} */

//3.-­‐ Crea un script que pregunte constantemente números al usuario hasta que el usuario introduzca el número 0. 
/* var num=parseInt(prompt("Numero?"));
while (num!=0) {
    num=parseInt(prompt("Numero33?"));
} */

//4.-­‐ Crea que un script que imprima en el documento HTML todas las palabras introducidas por el usuario. El script debe terminar cuando el usuario introduzca la palabra “SALIR”. 
/* var word=prompt("Palabra: ");
while (word!="Salir") {
    document.write(word+"<br>")
    var word=prompt("Palabra: ");    
} */

//5.-­‐ Crea un script que pida al usuario 10 números, y muestre su suma en pantalla. 
/* var suma=0;
for (let i = 0; i < 4; i++) {
     let num=parseInt(prompt("Numero "+(i+1)));   
    suma=suma+num;
}
alert("suma: "+suma); */

//6.-­‐ Crea un script que pida al usuario un número, y muestre en pantalla su tabla de multiplicar. 
/* var num=parseInt(prompt("Tabla del: "));
document.write("TABLA DEL "+num+"<hr>");
for (let i = 1; i < 11; i++) {
    document.write(num+"X"+i+"="+(num*i)+"<br>")    
} */

//7.-­‐ Realiza un pequeño adivinador, de manera que primero le pida al usuario un número, y después el usuario (aunque se entienda que sea otro) deberá adivinarlo. El programa dé pequeñas pistas al usuario que adivina (indicando si el número buscado es más pequeño o más mayor que el introducido).
