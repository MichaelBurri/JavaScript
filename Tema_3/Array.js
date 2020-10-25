/* 1. Diseña una web que cree un Array llamado clase que contenga información de una clase.
Cada elemento del array debe ser una tupla de 4 campos: nombre, edad, nota primer
trimestre, nota segundo trimestre y nota tercer trimestre (todos separados por comas). Por
ejemplo: clase[0] = “Angel Garcia, 20, 6, 7, 10”
2. Escribe una función que dado un número de estudiante y un trimestre, devuelva su nota.
Sobreescribe esa función de tal modo que si no se indica el trimestre se devuelva la nota
media de los exámenes.
3. Escribe una función que devuelva la edad media de los alumnos de la clase.
4. A veces para elegir un estudiante al que preguntar en clase necesitamos hacerlo al azar.
Escribe una función que aleatoriamente vaya devolviendo el nombre de un estudiante cada
vez.*/

//5. Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
//al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
//juntos los elementos pares y los impares. Después, volver a mostrar el array
/* function paresImpares() {
    var num=new Array(0);var num2 = new Array(0);

    for (let i = 0; i < 100; i++) {
        let ale=Math.floor(Math.random()*1000+1);
        num.push(ale);
    }
    
    for (numeros of num){
        document.write(numeros+" ");
        if (numeros%2===0) {
            num2.unshift(numeros);
        }
        else
            num2.push(numeros)        
                 
    }
    document.write("<br>REORDENADOS ")
    for (numeros of num2){
        document.write(numeros+" ");  
    }
        
}
paresImpares(); */
/*6. Utiliza Arrays para resolver el siguiente problema: Una empresa paga a sus vendedores en
base a comisiones. Los vendedores reciben $ 200 por semana, más el 9% de sus ventas
brutas de esa semana. Por ejemplo, un vendedor que gana en total $ 5000 en ventas en una
semana recibe $ 200 más el 9 por ciento de $ 5000, o sea un total de $ 650.
Diseña una web que permita dar de alta a vendedores, introducir sus ventas e indique cual
sería su sueldo final.
*/

//7. Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una
//dimensión:
//a) Establecer los 10 elementos del array a cero.
/* let ar=[0,1,2,3,4,5,6,7,8,9,10,12,14];
function diezACero(ar) {
    for (let i = 0; i < 10; i++) {
        ar[i]=0;
        
    }
    return ar;
}
function ponerAcero(){
    return array.map((el,index) => {
        if(index<10){
            return 0;
        }
        else{
            return el;
        }
        );
}
//b) Añadir 1 a cada uno de los elementos del array.
function todosMasUno(ar) {
    let long=ar.length;
    for (let i = 0; i < long; i++) {
        ar[i]+=1;        
    }
    return ar;
}
//c) Muestra los valores del array separados por espacios.
function mostrarEspacio(ar) {
    for (const i of ar) {
        document.write(i+" ");
    }
}
mostrarEspacio(todosMasUno(diezACero(ar))); */

//8. Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de
//dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los
//dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los
//valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000
//lanzamientos y muestra el número de veces que aparece cada una de las combinaciones.
var sum=[];var comb=[];

for (let i = 0; i < 36000; i++) {
    let al1=Math.floor(Math.random()*6+1);
    let al2=Math.floor(Math.random()*6+1);
    sum.push(al1+al2);
    comb.push([al1,al2]);
}

function count(ar,num) {
    let cont=0;
    for (const i of ar) {
        if (i===num){
            cont++;
        }
    }
    return cont;
}

function count2(ar,num1,num2){
    let cont=0;
    for (let i=0; i<ar.length;i++) {        
        if ((ar[i][0]===num1&&ar[i][1]===num2)){
            cont++;
        } 
    }
    return cont;
    
}

function tablaSuma(sum){
    document.write("<table style='border: 1px solid black'><caption>Suma de dos dados.</caption>");
    for (let i = 2; i < 13; i++) {
        document.write("<tr><td>"+i+"</td><td>"+count(sum,i)+"</td></tr>");  
    }
    document.write("</table>");
}

function tablaComb(comb){
    document.write("<table style='border: 1px solid black'><caption>Combinaciones.</caption>");
    for (let i = 1; i < 7; i++) {
        for (let j = 1; j < 7; j++) {
            document.write("<tr><td>"+i+"-"+j+"</td><td>"+count2(comb,i,j)+"</td></tr>"); 
        }
         
    }
    document.write("</table>");
}

tablaSuma(sum); 
tablaComb(comb);

//9. Mejora el ejercicio anterior para además mostrar una tabla bidimensional que muestre las
//combinaciones (no sólo la suma) que se han ido dando (ahora sí podemos usar arrays
//bidimensionales).


/*10. Una pequeña aerolínea acaba de comprar un programa para su nuevo sistema de reservas.
Diseña la web encargada de asignar asientos en cada vuelo de avión de la aerolínea
(capacidad: 10 plazas). Se debe pedir en primer lugar el tipo de asiento: "First” (asientos 1 al
5) oy "Turista" (resto). Una vez escogido un asiento libre, se debe poder imprimir una
tarjeta de embarque que indique la persona, el número de asiento y clase de éste (en una
nueva ventana). Deben utilizarse arrays para solucionar el problema.
11. Utiliza una matriz de dos dimensiones para resolver el siguiente problema: Una empresa
tiene cuatro vendedores (1 a 4) que venden cinco productos diferentes (1 a 5). Una vez al
día, cada vendedor pasa en un estadillo con las ventas realizadas por producto. Cada hoja
contiene
a) el número de vendedor,
b) el número de producto, y
c) el valor total de los productos vendidos ese día.
Así, cada vendedor pasa entre cero y cinco hojas de ventas por día. Supón que disponemos
dee la información de todos los estadillos del último mes. Escribir un script que lee toda esta
información de las ventas del mes pasado y resumir el total de ventas por vendedor por
producto. Todos los totales deben estar almacenan en las ventas de matriz de dos
dimensiones. Después de procesar toda la información para el mes pasado, mostrar los
resultados en un formato de tabla XHTML, con cada una de las columnas que representan
un vendedor y cada una de las filas que representan un producto diferente. Además se
mostrará una última fila con las ventas acumuladas por vendedor, y una última columna con
las ventas acumuladas por producto. */