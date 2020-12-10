function main() {
    var tabla="";
    tabla+="<table style='border-collapse: collapse;border: 1px solid black;border-spacing: 0px;'>";
    for (let i = 0; i < 8; i++) {
       tabla+="<tr style='border-collapse: collapse;border: 1px solid black'>";
       for (let j = 0; j < 8; j++) {
           var id=(i+1)+""+(j+1);
           if ((i+j)%2===0) {
            tabla+="<td id="+id+" style='border-collapse: collapse;border: 1px solid black;padding: 0px; margin: 0px;'><img src='Black.png' alt='Black' style='display:block;' width='100%'></img></td>";
           }
           else if((i+j)%2===1){
            tabla+="<td style='border-collapse: collapse;border: 1px solid black;padding: 0px; margin: 0px;'><img src='White.png' alt='White' style='display: block' width='100%'></img></td>";
           }
           //tabla+="<td style='border-collapse: collapse;border: 1px solid black'><img src='Q.png' alt='Queen' width='100' heigth='100%'></img></td>";       
       }     
       tabla+="</tr>"; 
    }
    tabla+="</table>";
    document.write(tabla);
}
//
main();