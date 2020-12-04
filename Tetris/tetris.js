//VARIABLES.
var piezas=[];
var cont=0;
var piezasColor=["red","yellow","blue","green","purple"];
const ANCHO=50;const ALTO=50;
const DIMX=10;const DIMY=14;
//-----------------------------------------------------------
//CLASE RECTANGULO.
class Rectangulo{    
    constructor (color, x, y){
        this.color = color;
        this.x = x;
        this.y = y;        
        this.alto=ALTO;this.ancho=ANCHO;
        this.puedeDer=true;
        this.puedeIzq=true;
        this.puedeY=true;
        

        this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");                       
    }

    dibujar(){
        this.rect.setAttributeNS(null, "x", this.x);
        this.rect.setAttributeNS(null, "y", this.y);
        this.rect.setAttributeNS(null, "height", this.ancho);
        this.rect.setAttributeNS(null, "width",this.alto);
        this.rect.setAttributeNS(null, "fill", this.color);
        this.rect.setAttributeNS(null, "stroke","black");

        document.getElementById("svg").appendChild(this.rect);
         
    }

    moverX(n){
        if (n<0) {
            this.x-=this.ancho;             
        }
        else if(n>0){
            this.x+=this.ancho;            
        }
    }

    moverY(){
        this.y+=this.alto;  
    }
}

//-----------------------------------------------------------
//CLASE TETRIS
class Tetris{
    constructor(element){
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("width", DIMX*ANCHO);
        this.svg.setAttribute("height", DIMY*ANCHO);
        this.svg.setAttribute("id","svg");
        element.appendChild(this.svg);

        this.tablero=crearMatriz(DIMX,DIMY+1);
        this.piezaActual="O";
        this.az=1;

        this.score=0;
        this.GO=false;
    }  

    //Creador de Piezas.
    crearPiezaAleatoria(){
        //Pieza aleatoria 
        let piezaTipo=aleatorio(0,5);
        //Color aleatorio 
        let piezaColor=piezasColor[aleatorio(0,5)];
        //Coordenadas x e y de cada rectangulo según la pieza.
        let x1,x2,x3,x4,y1,y2,y3,y4;
        //switch:
        switch (piezaTipo) {
            case 0: //"Pieza O"
                x1=3;y1=0;
                x2=3;y2=1; 
                x3=4;y3=0;
                x4=4;y4=1;
                this.piezaActual="O";
                break;
            case 1://"Pieza T"
                x1=3;y1=0;
                x2=4;y2=0; 
                x3=5;y3=0;
                x4=4;y4=1;
                this.piezaActual="T";
                break;
            case 2: //"Pieza Z"
                x1=3;y1=0;
                x2=4;y2=0; 
                x3=4;y3=1;
                x4=5;y4=1;
                this.piezaActual="Z";
                break;
            case 3://"Pieza L"
                x1=3;y1=0;
                x2=3;y2=1; 
                x3=4;y3=0;
                x4=5;y4=0;
                this.piezaActual="L";
                break;               
            default://"Pieza I"
                x1=3;y1=0;
                x2=4;y2=0; 
                x3=5;y3=0;
                x4=6;y4=0;
                this.piezaActual="I";
                break;
        }
        this.az=1;
        //Construcción de la pieza y adición al array 'piezas'.
        piezas.push(new Rectangulo(piezaColor,x1*ANCHO,y1*ALTO));
        piezas.push(new Rectangulo(piezaColor,x2*ANCHO,y2*ALTO));
        piezas.push(new Rectangulo(piezaColor,x3*ANCHO,y3*ALTO));
        piezas.push(new Rectangulo(piezaColor,x4*ANCHO,y4*ALTO)); 
              
    }

    actualizarMatrix(){
        this.tablero=crearMatriz(DIMX,DIMY+1);
        this.tablero[14]=[1,1,1,1,1,1,1,1,1];
        let x,y;   
        for (let i = 0; i < this.tablero.length; i++) {
            for (let j = 0; j <this.tablero[0].length; j++) {
                for (let k = 0; k < piezas.length; k++){
                    x=piezas[k].x/ANCHO;y=piezas[k].y/ALTO;                   
                    if (x===j&&y===i) {
                        this.tablero[i][j]=1;
                        if(k===piezas.length-1||k===piezas.length-2||k===piezas.length-3||k===piezas.length-4){
                            this.tablero[i][j]=2;
                        }
                    }                    
                }   
            }                
        } 
    }
    
    borrarPiezas(){
        let sw;
        for (let i = 0; i < this.tablero.length; i++) {
            sw=true;
            for (let j = 0; j < this.tablero[0].length; j++) {                
                if (this.tablero[i][j]!==1){                    
                    sw=false;
                }              
            }
            if(sw===true){                
                for (let k = piezas.length-1; k >= 0; k--){
                    if(piezas[k].y===ALTO*i){                        
                        piezas.splice(k,1); 
                        this.score+=10;                       
                        }
                    }                    
                } 
                sw=false;               
            } 
    }

    actualizarScore(){
        document.getElementById('Score').innerHTML='SCORE: '+this.score;
    }

    moverPiezaX(sentido){
        for (let i = 0; i < 4; i++) {
            piezas[piezas.length-(i+1)].moverX(sentido)            
        } 
    }

    girarPieza(tipo){
        let az=this.az;
        let p1=piezas[piezas.length-4];
        let p2=piezas[piezas.length-3];
        let p3=piezas[piezas.length-2];
        let p4=piezas[piezas.length-1];
        let x1=0,x2=0,x3=0,x4=0,y1=0,y2=0,y3=0,y4=0;

        switch (az) {
            case 1:
                switch (tipo) {
                    case "T":
                        x3=-1;y3=-1;
                        break;
                    case "Z":
                        x1=+2;
                        y2=+2;                        
                        break; 
                    case "L":
                        x1=+2;y1=+2;
                        x2=+2; 
                        break;
                    case "I":
                        x2=-1;y2=+1;
                        x3=-2;y3=+2;
                        x4=-3;y4=+3;
                        break; 
                    default:
                        break;
                }
                this.az=2;
                break;
            case 2:
                switch (tipo) {
                    case "T":
                        x4=+1;y4=-1;
                        this.az=3; 
                        break;
                    case "Z":
                        x1=-2;
                        y2=-2;
                        this.az=1;
                        break; 
                    case "L":
                        x1=-2;y1=-1;
                        y3=+1;
                        this.az=3;
                        break;
                    case "I":
                        x2=+1;y2=-1;
                        x3=+2;y3=-2;
                        x4=+3;y4=-3;
                        this.az=1;
                        break;
                    default:
                        break;
                }                
                break;
            case 3:
                switch (tipo) {
                    case "T":
                        x1=+1;y1=+1; 
                        break; 
                    case "L":
                        y1=-1;
                        x2=-2;
                        y3=+1;
                        x4=-2;y4=+2;
                        break; 
                    default:
                        break;
                }
                this.az=4;
                break;
            case 4:
                switch (tipo) {
                    case "T":
                        x1=-1;y1=-1;
                        x3=+1;y3=+1;
                        x4=-1;y4=+1;    
                        break;                    
                    case "L":
                        y3=-2;
                        x4=+2;y4=-2;
                        break;                                        
                    default:
                        break;
                }
                this.az=1;
                break;
        }        
       
        p1.x+=(x1*ANCHO);
        p1.y+=(y1*ALTO); 
        p2.x+=(x2*ANCHO);
        p2.y+=(y2*ALTO);
        p3.x+=(x3*ANCHO);
        p3.y+=(y3*ALTO);       
        p4.x+=(x4*ANCHO);
        p4.y+=(y4*ALTO);
    }

    puedeMoverIzq(){        
        let sw=true;
        for (let i = piezas.length-1; i > piezas.length-5; i--) {
            if(piezas[i].puedeIzq!==true){
                sw=false;
            }           
        }
        return sw;
    }

    puedeMoverDer(){        
        let sw=true;
        for (let i = piezas.length-1; i > piezas.length-5; i--) {
            if(piezas[i].puedeDer!==true){
                sw=false;
            }           
        }
        return sw;
    }

    moverPiezaY(){
        for (let i = 0; i < 4; i++) {
            piezas[piezas.length-(i+1)].moverY()            
        } 
        
    }    

    puedeMoverY(){
        let sw=true;
        for (let i = piezas.length-1; i > piezas.length-5; i--) {
            if(piezas[i].puedeY!==true){
                sw=false;
            }           
        }
        return sw;
    }

    detectarColX(){
        for (let i = this.tablero.length-2; i > 1; i--){            
            for (let j = piezas.length-1; j > piezas.length-5 ; j--){
                if(this.tablero[piezas[j].y/ALTO][piezas[j].x/ANCHO+1]===1){
                    piezas[j].puedeDer=false;
                }
                else{
                    piezas[j].puedeDer=true;
                }
            }
        }

        for (let i = this.tablero.length-2; i > 1; i--){            
            for (let j = piezas.length-1; j > piezas.length-5 ; j--){
                if(this.tablero[piezas[j].y/ALTO][piezas[j].x/ANCHO-1]===1){
                    piezas[j].puedeIzq=false;
                }
                else{
                    piezas[j].puedeIzq=true;
                }
            }
        }
    }

    detectarColY(){
        for (let i = this.tablero.length-2; i > 1; i--){            
            for (let j = piezas.length-1; j > piezas.length-5 ; j--){
                if(this.tablero[piezas[j].y/ALTO+1][piezas[j].x/ANCHO]===1){
                    piezas[j].puedeY=false;
                }
                else{
                    piezas[j].puedeY=true;
                }
            }
        }
    }

    limiteY(){
        for (let i = piezas.length-1; i >= 0; i--){
            if(piezas[i].y/ALTO>=DIMY-1){
                piezas[i].puedeY=false;
            }
        }
    }

    limiteX(){
        for (let i = piezas.length-1; i >= 0; i--){
            if(piezas[i].x/ANCHO>=DIMX-1){
                piezas[i].puedeDer=false;
            }
            if(piezas[i].x/ANCHO<=0){
                piezas[i].puedeIzq=false;
            }
        }
    }

    eliminarRect(){        
        for (let i = 0; i < piezas.length; i++) {
            piezas[i].rect.parentElement.removeChild(piezas[i].rect);            
        }
    } 
    dibujarPiezas(){
        for (let i = 0; i<piezas.length; i++) {
            piezas[i].dibujar();    
        }        
    }

    gameOver(){
        if(!this.puedeMoverY()&&!esArray0(this.tablero[0])&&!this.GO)
        {
            this.svg.remove();
            let pantallaGO = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            pantallaGO.setAttribute("width", 703);
            pantallaGO.setAttribute("height", 355);
            pantallaGO.setAttribute("id","GO");
            document.getElementById('div').appendChild(pantallaGO);
            this.GO=true;
        }
    }

    lineaRellena(){
        for (let i = this.tablero.length-1; i >0 ; i--) {
            if (esArray0(this.tablero[i])){
                for (let j = 0; j < piezas.length-4; j++) {
                    if(piezas[j].y/ALTO<=i-1){
                        piezas[j].moverY();
                    }                    
                }
            }
            
        }
    }

    main(){ 
        
        this.dibujarPiezas(); 
        this.actualizarMatrix();       
        this.eliminarRect();
        this.borrarPiezas(); 
        this.actualizarScore();       
        this.actualizarMatrix();        
        this.dibujarPiezas();
        
        if((cont===0||!this.puedeMoverY())&&!this.GO){
            this.crearPiezaAleatoria();
        }
        cont++;
        this.detectarColY();this.limiteY();this.detectarColX();this.limiteX();
        this.actualizarMatrix();

        if(this.puedeMoverY()&&cont%100===0){
            this.lineaRellena();
            this.moverPiezaY();
            
        }
        this.gameOver();    

    }
}

//-----------------------------------------------------------

//FUNCIONES AUXILIARES.
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

function aleatorio(num1,num2){
    return parseInt(Math.random()*(num2-num1)+num1);
}

function esArray0(array){
    let sw=true;
    for (let i = 0; i < array.length; i++) {
        if(array[i]!==0){
            sw=false;
        }
    }
    return sw;
}


//--------------------------------------------------
//INICIO JUEGO
//document.getElementById('start').addEventListener('click', (e) =>{    
//});

let element=document.getElementById('div');
    tetris=new Tetris(element);

    window.setInterval( () => {tetris.main();}, 10);

window.addEventListener('keydown', (e) =>{
    if(e.key==='d'&&tetris.puedeMoverDer()){
        tetris.moverPiezaX(1);
    }
    else if(e.key==='a'&&tetris.puedeMoverIzq()){
        tetris.moverPiezaX(-1);
    }
    else if(e.key==='s'){
        tetris.moverPiezaY();
    }
    else if(e.key===' '){
        tetris.girarPieza(tetris.piezaActual);        
    }  
});
//-----------------------------------------------------