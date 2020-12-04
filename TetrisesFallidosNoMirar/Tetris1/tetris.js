// Variables
import { Pieza, PiezaI, PiezaL, PiezaT, PiezaO, PiezaZ } from "classes.js";
class Tetris{
    constructor(element){
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("width", 450);
        this.svg.setAttribute("height", 700);
        element.appendChild(this.svg);
    }
}

/*
bucleprincipal(){
    hace metodos constantemente
    pieza1.mover() pero solo cuando una variable global está a true
}ç
a.vista.parent.removeChild
*/

//Clase Juego

new Tetris('ZonaJuego');