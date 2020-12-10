ANCHO=50;
class Pieza{
    constructor(pieza,color,fondo){
        this.pieza=pieza;
        this.color=color;
        this.fondo=fondo;

        var x = document.createElement("IMG");
        x.setAttribute("src", pieza+color+fondo+'.png');
        x.setAttribute("width", ANCHO);
        x.setAttribute("height", ANCHO);
        x.setAttribute("alt", pieza+color+fondo);
        document.getElementById('div').appendChild(x);

    }
}

class Ajedrez{
    contructor(element){
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("width", 8*ANCHO);
        this.svg.setAttribute("height", 8*ANCHO);
        this.svg.setAttribute("id","svg");
        element.appendChild(this.svg);
        
        this.tablero=crearMatriz(8,8);
    }

    crearTablero(){
        this.tablero[0][0]='TNB';
        this.tablero[0][1]
    }
}

//FUNCIONES AUXILIARES
function crearMatriz(ancho, alto){
    let m=[];

    for (let i = 0; i < alto; i++) {
        m[i]=[];
        for (let j = 0; j < ancho; j++) {
            m[i][j]=0;        
        }    
    }
    return m;
}

new Pieza('Q','B','B');