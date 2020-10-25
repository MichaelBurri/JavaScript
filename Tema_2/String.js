//Ejercicio 1. Crea las siguientes funciones y llámalas desde una página XHTML para mostrar su funcionamiento:
    //a)invierteCadena(cad):devuelve invertida una cadena dada por el usuario
    function invierteCadena(cad) {
        let cadena=new String(cad).split("");
        let cadena2="";
        for (let i = 0; i < cadena.length; i++) {
           cadena2+=cadena[cadena.length-i-1];
            
        }
        return cadena2;
    }
    let pal=prompt("Hey: ");
    document.write(invierteCadena(pal));
    //b)inviertePalabras(cad):devuelve invertidas las palabras contenidas en la cadena.
    function inviertePalabras(cad) {
        
    } 
    //c)encuentraPalabraMasLarga(cad):para una cadena de caracteres dada devuelve la 
//longitud de la palabra más larga en ella contenida.
    
    //d)filtraPalabrasMasLargas(cad,i):para una cadena de caracteres y un valor
//numérico(i),devuelva el número de palabras cuya longitud es mayor a i.
    
    //e)cadenaBienFormada(cad): formatea correctamente la cadena pasada, de tal modo
//que sólo aparece en mayúscula la primera letra y el resto en minúscula.



//Ejercicio 2. Definir una función que muestre información sobre una cadena de
//texto que se le pasa como argumento. A partir de la cadena que se le pasa
//la función determina si esa cadena está formada sólo por mayúsculas, sólo por
//minúsculas o por una mezcla de ambas.

/* function esMayus(cad) {
    const cadena=new String(cad);
    var mayus=0;var minus=0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena.charAt(i)===cadena.charAt(i).toUpperCase())
            mayus++;
        else if(cadena.charAt(i)===cadena.charAt(i).toLowerCase())
            minus++;
    }
    if(mayus===cadena.length)
        document.write("TODAS MAYUSCULAS.");
    else if (minus===cadena.length) {
        document.write("todas minúsculas.");
    }
    else
        document.write("MeZcLa De AmBaS");
}
esMayus('1'); */

//Ejercicio 7. Desarrolla una función que tomando como entrada una cadena de texto
//nos devuelva si es o no un palíndromo
/* function esPalindromo(cad) {
    var pal;
    const cadena=new String(cad);
    for (let i = 0; i < cadena.length; i++) {
        if (cadena.charAt(i).toUpperCase()!==cadena.charAt(cadena.length-1-i).toUpperCase()) {
            return false;
        }
        
    }
    return true;
}
var cadena=prompt("Palíndromo?")
if(esPalindromo(cadena)){
    document.write(cadena+" es un palíndromo");
}
else document.write("No lo es"); */
//document.write(esPalindromo('Tacocat'));

//Ejercicio 8. Implementa una función que tomando como entrada una cadena de texto 
//sea capaz de contabilizar el número de palabras. Ten en cuenta que entre
//dos palabras puede haber más de 1 blanco, e incluso puede aparecer al principio
//o final de ésta.
function cuentaPalabras(params) {
    
}



//Ejercicio 9. Escribir un procedimiento que lea una palabra y la escriba 
//(formateada dentro de una tabla) como se ve en la figura:
/* var pal=prompt("Entrada.");
var tabla="<table>";
for (let i = 0; i < pal.length; i++) {
    tabla+="<tr>";
    for (let j = 0; j < pal.length; j++) {
        tabla+="<td>";
            if (i===0) {
                tabla+=pal.charAt(j);
            }
            else if(i===pal.length-1){
                tabla+=pal.charAt(pal.length-j-1);
            }
            else{
                if (j===0) {
                    tabla+=pal.charAt(i);                    
                }
                else if(j===pal.length-1){
                    tabla+=pal.charAt(pal.length-i-1);
                }
            }
            //tabla+="Y";
        tabla+="</td>";
        
    }
    tabla+="</tr>";
    
}
document.write(tabla); */