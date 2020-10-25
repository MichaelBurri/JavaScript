var x=parseInt(prompt("Intro un numero","0"),10);
if(x<5){
	document.write("Suspenso");
} else if (x<7){
	document.write("Aprobado");
} else if (x<9){
	document.write("Notable");
} else{
	document.write("Sobresaliente");
}