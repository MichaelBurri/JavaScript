function start(){
    tabla="";
    tabla+="<table style='border: 1px solid black'>";
    for (let i = 0; i < 100; i++) {
        tabla+="<tr>";
        for (let j = 0; j < 100; j++) {
            tabla+="<td onmousemove='paint(event)' style='border: 1px solid black'></td>";            
        }       
        tabla+="</tr>";
    }
    tabla+="</table>";
    document.getElementById("tabla").innerHTML=tabla;

}

function paint(e){
    e.target.style.backgroundColor="red";
}