/* Haciendo uso de P.O.O. Modela los siguientes enunciados. En cada uno de ellos se te
pide la implementación de un pequeño juego haciendo uso de JavaScript. En este momento no
debes pensar en la representación gráfica del juego, sólo céntrate en el diseño de la clase
que permita implementar el juego en cuestión con todas sus posibilidades y casuistica.
Posteriormente dotaremos a estos juegos de una representación gráfica adecuada y se
representarán en pantalla, pero en este momento deben ser independientes de ésta (tan sólo
tendrán una interfaz básica en pruebas).
1) Puzzle. Se desea implementar una web para la realización de puzzles. Un puzzle no es
más que un tablero cuadrado con un hueco que podemos mover y que permite
reordenar las piezas. Se pide por tanto la implementación de una clase que represente
este juego teniendo en cuenta:
1. La dimensión puede variar, se escogerá en la creación.
2. El espacio en blanco sólo se mueve arriba, abajo, izquierda, derecha, controlando
por supuesto que sea un movimiento válido.
3. Debe llevarse un control del tiempo mínimo para resolverlo, así como el número de
movimientos realizados.
4. Los tableros se generarán aleatoriamente.
5. Implementarás un método dibujar() que imprimirá en pantalla el tablero para poder
ser probado.
2) Tres en Raya. El juego del tres en raya consiste en un tablero de 3x3, en el que
sucesivamente dos jugadores van marcando casillas hasta conseguir tener sus tres
marcas en línea, pudiendo ser ésta horizontal, vertical o en diagonal. Se pide por tanto
la implementación de éste juego teniendo en cuenta:
1. El juego es pensado para ser usado por dos usuarios.
2. El juego finaliza cuando los dos seleccionan sus 3 marcas, o bien uno consigue
antes las tres en línea.
3) OPCIONAL: Implementa una algoritmo que haciendo uso de un cierto grado de
inteligencia artificial mejore el juego del Tres en Raya permitiendo jugar contra la
máquina. NOTA: no se aceptará como válido un algoritmo aleatorio.
4) Buscaminas: Implementa éste juego teniendo en cuenta las siguientes particularidades:
1. El juego consiste en despejar todas las casillas de una pantalla que no oculten una
mina.
2. Algunas casillas tienen un número, este número indica las minas que suman todas
las casillas circundantes. Así, si una casilla tiene el número 3, significa que de las
ocho casillas que hay alrededor (si no es en una esquina o borde) hay 3 con minas
y 5 sin minas.
3. Si se descubre una casilla sin n mero indica que ninguna de las ú casillas vecinas
tiene mina y estas se descubren automáticamente. Si se descubre una casilla con
una mina se pierde la partida.
4. El tablero será de 8x8 con 10 minas.
5. Debe controlarse un tiempo límite para resolver el juego. */