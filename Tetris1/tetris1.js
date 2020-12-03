var piezas=[];
//var casillas=[9x14];
const ANCHO=50;

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
        
        
        this.rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.rect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.rect3 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.rect4 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        
        
        this.rect1.setAttributeNS(null, "x", this.x1);
        this.rect1.setAttributeNS(null, "y", this.y1);
        this.rect1.setAttributeNS(null, "height",ANCHO);
        this.rect1.setAttributeNS(null, "width",ANCHO);
        this.rect1.setAttributeNS(null, "fill", this.color);
        this.rect1.setAttributeNS(null, "stroke","black")

        this.rect2.setAttributeNS(null, "x", this.x2);
        this.rect2.setAttributeNS(null, "y", this.y2);
        this.rect2.setAttributeNS(null, "height",ANCHO);
        this.rect2.setAttributeNS(null, "width",ANCHO);
        this.rect2.setAttributeNS(null, "fill", this.color);
        this.rect2.setAttributeNS(null, "stroke","black")

        this.rect3.setAttributeNS(null, "x", this.x3);
        this.rect3.setAttributeNS(null, "y", this.y3);
        this.rect3.setAttributeNS(null, "height",ANCHO);
        this.rect3.setAttributeNS(null, "width",ANCHO);
        this.rect3.setAttributeNS(null, "fill", this.color);
        this.rect3.setAttributeNS(null, "stroke","black")

        this.rect4.setAttributeNS(null, "x", this.x4);
        this.rect4.setAttributeNS(null, "y", this.y4);
        this.rect4.setAttributeNS(null, "height",ANCHO);
        this.rect4.setAttributeNS(null, "width",ANCHO);
        this.rect4.setAttributeNS(null, "fill", this.color);
        this.rect4.setAttributeNS(null, "stroke","black")

        document.getElementById("svg").appendChild(this.rect1);
        document.getElementById("svg").appendChild(this.rect2);
        document.getElementById("svg").appendChild(this.rect3);
        document.getElementById("svg").appendChild(this.rect4);



        
    }
    moverX(i){
        if (i<0) {
            this.rect1.setAttributeNS(null,"x",this.rect1.getAttributeNS(null, "x")-50);
            this.rect2.setAttributeNS(null,"x",this.rect2.getAttributeNS(null, "x")-50);
            this.rect3.setAttributeNS(null,"x",this.rect3.getAttributeNS(null, "x")-50);
            this.rect4.setAttributeNS(null,"x",this.rect4.getAttributeNS(null, "x")-50); 
        }
        else if(i>0){
            this.rect1.setAttributeNS(null,"x",parseInt(this.rect1.getAttributeNS(null, "x"))+50);
            this.rect2.setAttributeNS(null,"x",parseInt(this.rect2.getAttributeNS(null, "x"))+50);
            this.rect3.setAttributeNS(null,"x",parseInt(this.rect3.getAttributeNS(null, "x"))+50);
            this.rect4.setAttributeNS(null,"x",parseInt(this.rect4.getAttributeNS(null, "x"))+50); 
            
        }        
    
    }

    moverY(){
        this.rect1.setAttributeNS(null,"y",parseInt(this.rect1.getAttributeNS(null, "y"))+50);
        this.rect2.setAttributeNS(null,"y",parseInt(this.rect2.getAttributeNS(null, "y"))+50);
        this.rect3.setAttributeNS(null,"y",parseInt(this.rect3.getAttributeNS(null, "y"))+50);
        this.rect4.setAttributeNS(null,"y",parseInt(this.rect4.getAttributeNS(null, "y"))+50); 
    }

    girar(tipo, azimut){

    }

    cambiarColor(){

    }

    introCasillas(){
        
    }

    detectarChoque(){
        this.rect1.getAttributeNS(null, "x")
        this.rect1.getAttributeNS(null, "y")
    }

    detectarLineaCompleta(){

    }
    puntuacion(){

    }


    {/* <svg id="svg" width="450" height="700">
        
    </svg> */}

    
}

class Juego{
    constructor(){
        
    }

    mover(){
       document.getElementById("svg").addEventListener(onkeypress,moverX(+1));
    }
    
}
a=new Juego();
a.mover;
function dibujar(pieza, x, y){
        let x1, y1, x2, y2, x3, y3, x4, y4;
        switch (pieza) {
            case 'L':{
                //a=new Pieza('red',175,0,175,50,225,50,275,50);
                x1=x;y1=y;
                x2=x;y2=y+50;
                x3=x+50;y3=y+50;
                x4=x+100;y4=y+50;}
                break;
            case 'T':
                //a=new Pieza('red',175,0,125,0,225,0,175,50);
                {
                    x1=x;y1=y;
                    x2=x+50;y2=y;
                    x3=x+100;y3=y;
                    x4=x+50;y4=y+50;
                }
                break;
            case 'Z':
                //a=new Pieza('red',175,0,225,0,225,50,275,50);
                {
                    x1=x;y1=y;
                    x2=x+50;y2=y;
                    x3=x+50;y3=y+50;
                    x4=x+100;y4=y+50;
                }
                break;
            case 'O':
                //a=new Pieza('red',175,0,225,0,175,50,225,50);
                {
                    x1=x;y1=y;
                    x2=x+50;y2=y;
                    x3=x;y3=y+50;
                    x4=x+50;y4=y+50;
                }
                break;
            case 'I':
                //a=new Pieza('red',175,0,225,0,275,0,325,0);
                {
                    x1=x;y1=y;
                    x2=x+50;y2=y;
                    x3=x+100;y3=y;
                    x4=x+150;y4=y;
                }
                break;
        
            default:
                break;
        }
        piezas.push(new Pieza('red', x1, y1, x2, y2, x3, y3, x4, y4));
    }
dibujar('O',150,0);

//document.getElementById("svg").onclick=bolas[0].mover(-1);
//a=new pieza('red',175,0,225,0,275,0,325,0,0,10);
