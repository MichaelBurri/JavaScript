
var List1=$('<ol>');
List1.html('Lista 1:');
var List2=$('<ul>').html('Lista 2:');

var li1=$('<li>');
var li2=$('<li>');
var li3=$('<li>');

li1.html('Tortilla');
List1.append(li1);
li2.html('Jamón');
List1.append(li2);
li3.html('Queso');
List1.append(li3);

List2.append($('<li>').html('Coca Cola'));
List2.append($('<li>').html('Leche'));
List2.append($('<li>').html('Té'));

$('body').append(List1);
$('body').append(List2);

$('ol li').first().hide();
$('ul li').first().hide();
