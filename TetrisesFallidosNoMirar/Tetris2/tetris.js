var piezas=[];
var pase=true;
var pase2=true;
class Pieza{    
    constructor (color, x1, y1, x2, y2, x3, y3, x4, y4){
        
        this.azimut=0;
        this.color = color;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.x4 = x4;
        this.y4 = y4;        
        
        this.alto=50;this.ancho=50;

        this.rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        //this.rect1.parent.removeChild
        this.rect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.rect3 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.rect4 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                       
    }

    dibujar(){
        this.rect1.setAttributeNS(null, "x", this.x1);
        this.rect1.setAttributeNS(null, "y", this.y1);
        this.rect1.setAttributeNS(null, "height", this.ancho);
        this.rect1.setAttributeNS(null, "width",this.alto);
        this.rect1.setAttributeNS(null, "fill", this.color);
        this.rect1.setAttributeNS(null, "stroke","black")

        this.rect2.setAttributeNS(null, "x", this.x2);
        this.rect2.setAttributeNS(null, "y", this.y2);
        this.rect2.setAttributeNS(null, "height",this.ancho);
        this.rect2.setAttributeNS(null, "width",this.alto);
        this.rect2.setAttributeNS(null, "fill", this.color);
        this.rect2.setAttributeNS(null, "stroke","black")

        this.rect3.setAttributeNS(null, "x", this.x3);
        this.rect3.setAttributeNS(null, "y", this.y3);
        this.rect3.setAttributeNS(null, "height",this.ancho);
        this.rect3.setAttributeNS(null, "width",this.alto);
        this.rect3.setAttributeNS(null, "fill", this.color);
        this.rect3.setAttributeNS(null, "stroke","black")

        this.rect4.setAttributeNS(null, "x", this.x4);
        this.rect4.setAttributeNS(null, "y", this.y4);
        this.rect4.setAttributeNS(null, "height",this.ancho);
        this.rect4.setAttributeNS(null, "width",this.alto);
        this.rect4.setAttributeNS(null, "fill", this.color);
        this.rect4.setAttributeNS(null, "stroke","black")

        document.getElementById("svg").appendChild(this.rect1);
        document.getElementById("svg").appendChild(this.rect2);
        document.getElementById("svg").appendChild(this.rect3);
        document.getElementById("svg").appendChild(this.rect4); 
    }

    moverX(n){
        if (n<0) {
            this.x1-=this.ancho;
            this.x2-=this.ancho;
            this.x3-=this.ancho;
            this.x4-=this.ancho;  
        }
        else if(n>0){
            this.x1+=this.ancho;
            this.x2+=this.ancho;
            this.x3+=this.ancho;
            this.x4+=this.ancho;
        }
        this.dibujar();
    }

    moverY(){
        this.y1+=this.alto;
        this.y2+=this.alto;
        this.y3+=this.alto;
        this.y4+=this.alto; 
        this.dibujar();
    }

    girar(){

    }

    borrar(){
        pieza1.rect1.parentElement.removeChild(pieza1.rect1)
    }
}

class PiezaO extends Pieza{
    constructor(color, x1, y1){
        super();
        this.color = color;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x1+this.ancho;
        this.y2 = y1;
        this.x3 = x1;
        this.y3 = y1+this.alto;
        this.x4 = x1+this.ancho;
        this.y4 = y1+this.alto;
    }
}

class PiezaT extends Pieza{
    constructor(color, x1, y1){
        super();
        this.color = color;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x1+this.ancho;
        this.y2 = y1;
        this.x3 = x1+2*(this.ancho);
        this.y3 = y1;
        this.x4 = x1+this.ancho;
        this.y4 = y1+this.alto; 
    }

}

class PiezaI extends Pieza{
    constructor(color, x1, y1){
        super();
        this.color = color;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x1+this.ancho;
        this.y2 = y1;
        this.x3 = x1+2*(this.ancho);
        this.y3 = y1;
        this.x4 = x1+3*(this.ancho);
        this.y4 = y1;
    }

    girar(){
        if(this.azimut==0){
            this.x2=this.x1;
            this.y2=this.y1+this.alto;
            this.x3=this.x1;
            this.y3=this.y1+2*(this.alto);
            this.x4=this.x1;
            this.y4=this.y1+3*(this.alto);
            
            this.azimut=1;
        }

        else if(this.azimut==1){
            this.x2 = this.x1+this.ancho;
            this.y2 = this.y1;
            this.x3 = this.x1+2*(this.ancho);
            this.y3 = this.y1;
            this.x4 = this.x1+3*(this.ancho);
            this.y4 = this.y1;

            this.azimut=0;
        }        

        this.dibujar();
    }
}

class PiezaL extends Pieza{
    constructor(color, x1, y1){
        super();
        this.color = color;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x1+this.ancho;
        this.y2 = y1;
        this.x3 = x1+2*(this.ancho);
        this.y3 = y1;
        this.x4 = x1;
        this.y4 = y1+this.alto;   
    }

    girar(){
        
    }
}

class PiezaZ extends Pieza{
    constructor(color, x1, y1){
        super();
        this.color = color;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x1+this.ancho;
        this.y2 = y1;
        this.x3 = x1+this.ancho;
        this.y3 = y1+this.alto;
        this.x4 = x1+2*(this.ancho);
        this.y4 = y1+this.alto;         
    }
}

class Tetris{
    constructor(element){
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("width", 450);
        this.svg.setAttribute("height", 700);
        this.svg.setAttribute("id","svg");
        element.appendChild(this.svg);

        this.tablero=crearMatriz(9,14);
    }  

    detectarColisiones(){

    }
    
    crearPieza(){
            piezas.push(new PiezaO("yellow",100,-50));
            piezas[piezas.length-1].dibujar();

    }

    main(){      
        
        if(pase===true){
            pase=false;
            this.crearPieza();
            console.log('gg');            
            
        } 
        if (pase===false){
            piezas[piezas.length-1].moverY();
        }
                 
        if (piezas[piezas.length-1].y1>=(50*12))
            pase=true;

    }
    
    
    
}

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

/*
bucleprincipal(){
    hace metodos constantemente
    pieza1.mover() pero solo cuando una variable global está a true
}ç
a.vista.parent.removeChild
*/


let element=document.getElementById('div');
tetris=new Tetris(element);
//pieza=new PiezaL("red",150,0);
window.setInterval( () => {tetris.main();}, 800);
