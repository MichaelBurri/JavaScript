var altura=parseInt(prompt("Dimension de las celdas:"));
document.write('<table border="0" cellspacing="2" bgcolor="black">');
for(let i=0;i<8;i++){
    document.write('<tr bgcolor="white" height="'+altura+'">');
    for(let j=0; j<8;j++){
        if(!((j+i)%2))
            document.write('<td width="'+altura+'"bgcolor="black">&nbsp;</td>');
        else
            document.write('<td width="'+altura+'">&nbsp;</td>');
    }
    document.write('</tr>');
}
document.write('</table>');