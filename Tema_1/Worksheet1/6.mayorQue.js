var x=parseInt(prompt("Intro un numero","0"),10);
var y=parseInt(prompt("Intro otro numero",0),10);
if(x==y){
	document.write(x," y ",y, " son iguales");
} else if (x>y){
	document.write(x," es mayor que ",y);
} else{
	document.write(y," es mayor que ",x);
}