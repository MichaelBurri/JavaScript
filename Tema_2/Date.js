//Ejercicio 1
/* var fecha=new Date();
document.write(fecha.getFullYear()+"<br>");
document.write(fecha.getMonth()+"<br>");
document.write(fecha.getDay()+"<br>");
document.write(fecha.getHours()+"<br>");
document.write(fecha.getMinutes()+"<br>");
document.write(fecha.getSeconds()+"<br>"); */

//Ejercicio 2
/* var fechaHoy=new Date();
document.write("Hoy"+fechaHoy);

var fecha85=fechaHoy;
fecha85.setDate(fecha85.getDate()+85);
document.write("<br>fecha+85"+fecha85);

var fecha187=fechaHoy;
fecha187.setDate(fechaHoy.getDate()-187);
document.write("<br>fecha-187"+fecha187);

fecha85.setFullYear(fecha85.getFullYear()+2);
document.write("<br>Dosaños"+fecha85);

fecha187.setHours(fecha187.getHours()-24);
document.write("<br>-24Horas"+fecha187);
var fechaResto=fecha85-fecha187;
document.write("<br>"+fechaResto); */

//Ejercicio 3,4
/* for (let i = 60; i >= 0; i--) {
    setTimeout(function(){
        console.log("Tiempo restante: "+i)},1000*(60-i));            
    }
setTimeout(function(){
        window.location.href="https://www.w3schools.com"},60000); */

//Ejercicio 5
/* for (let i = 0; i < 30; i++) {    
    setTimeout(() => {
    document.body.innerHTML="";
    document.write(new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds());
}, 1000*i);
} */

//Re-Ejercicio 4
var i=60;
function consolar() {
    console.log("Tiempo restante: "+i)
    i--;
    if(i>=0)
        setTimeout(consolar,1000);   
        
    setTimeout(function(){
        window.location.href="https://www.w3schools.com"},60000);
}
consolar();
