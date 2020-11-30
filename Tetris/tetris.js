var piezas=[];



class Pieza{
    constructor (color, x1, y1, x2, y2, x3, y3, x4, y4){
        
        this.color = color;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.x4 = x4;
        this.y4 = y4;
        this.velX = 0;
        this.velY = 10;
        //
        this.rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.rect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.rect3 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.rect4 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        //<rect x="10" y="10" width="100" height="100"/>
        this.rect1.setAttributeNS(null, "x", this.x1);
        this.rect1.setAttributeNS(null, "y", this.y1);
        this.rect1.setAttributeNS(null, "height",50);
        this.rect1.setAttributeNS(null, "width",50);
        this.rect1.setAttributeNS(null, "fill", this.color);
        this.rect1.setAttributeNS(null, "stroke","black")

        this.rect2.setAttributeNS(null, "x", this.x2);
        this.rect2.setAttributeNS(null, "y", this.y2);
        this.rect2.setAttributeNS(null, "height",50);
        this.rect2.setAttributeNS(null, "width",50);
        this.rect2.setAttributeNS(null, "fill", this.color);
        this.rect2.setAttributeNS(null, "stroke","black")

        this.rect3.setAttributeNS(null, "x", this.x3);
        this.rect3.setAttributeNS(null, "y", this.y3);
        this.rect3.setAttributeNS(null, "height",50);
        this.rect3.setAttributeNS(null, "width",50);
        this.rect3.setAttributeNS(null, "fill", this.color);
        this.rect3.setAttributeNS(null, "stroke","black")

        this.rect4.setAttributeNS(null, "x", this.x4);
        this.rect4.setAttributeNS(null, "y", this.y4);
        this.rect4.setAttributeNS(null, "height",50);
        this.rect4.setAttributeNS(null, "width",50);
        this.rect4.setAttributeNS(null, "fill", this.color);
        this.rect4.setAttributeNS(null, "stroke","black")

        document.getElementById("svg").appendChild(this.rect1);
        document.getElementById("svg").appendChild(this.rect2);
        document.getElementById("svg").appendChild(this.rect3);
        document.getElementById("svg").appendChild(this.rect4);



        
    }

    
    mover(){

    }
}
function dibujar(pieza){
        switch (pieza) {
            case 'L':
                a=new Pieza('red',175,0,175,50,225,50,275,50);
                break;
            case 'T':
                a=new Pieza('red',175,0,125,0,225,0,175,50);
                break;
            case 'Z':
                a=new Pieza('red',175,0,225,0,225,50,275,50);
                break;
            case 'O':
                a=new Pieza('red',175,0,225,0,175,50,225,50);
                break;
            case 'I':
                a=new Pieza('red',175,0,225,0,275,0,325,0);    
                break;
        
            default:
                break;
        }
    }
dibujar('T')
//a=new pieza('red',175,0,225,0,275,0,325,0,0,10);
