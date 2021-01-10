var tabla=$('<table>').html('TABLA');

for (let i = 0; i < 8; i++) {
    tabla.append($('<tr>').html(i+1));    
}

$('body').append(tabla);

for (let i = 1; i < 3; i++) {    
    $('table tr:nth-child('+i+')').css('background-color','red');
}
for (let i = 4; i <= 8; i++) {
    $('table tr:nth-child('+i+')').css('background-color','blue');
}