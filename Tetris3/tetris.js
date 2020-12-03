//VARIABLES.
var piezas=[];
var cont=0;
var piezasColor=["red","yellow","blue","green","purple"];
const ANCHO=25;const ALTO=25;
const DIMX=9;const DIMY=14;
//-----------------------------------------------------------
//CLASE RECTANGULO.
class Rectangulo{    
    constructor (color, x, y){
        this.color = color;
        this.x = x;
        this.y = y;        
        this.alto=ALTO;this.ancho=ANCHO;
        this.puedeX=true;
        this.puedeY=true;

        this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");                       
    }

    dibujar(){
        this.rect.setAttributeNS(null, "x", this.x);
        this.rect.setAttributeNS(null, "y", this.y);
        this.rect.setAttributeNS(null, "height", this.ancho);
        this.rect.setAttributeNS(null, "width",this.alto);
        this.rect.setAttributeNS(null, "fill", this.color);
        this.rect.setAttributeNS(null, "stroke","black")


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

        this.tablero=crearMatriz(DIMX,DIMY);
        

    }  

    puedeMoverX(){        

    }

    puedeMoverY(){
        for (let i = piezas.length-1; i > piezas.length-5; i--) {
            return(!(piezas[i].puedeY===false))            
        }
    }

    detectarMovY(){
        for (let i = piezas.length-5; i >= 0; i--) {
            return(!(piezas[i].puedeY===false))            
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
                        }
                    }                    
                } 
                sw=false;               
            } 
    }
    

    //Creador de Piezas.
    crearPiezaAleatoria(){
        //Pieza aleatoria 
        let piezaTipo=aleatorio(0,2);
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
                break;
            case 1://"Pieza T"
                x1=3;y1=0;
                x2=4;y2=0; 
                x3=5;y3=0;
                x4=4;y4=1;
                break;
            case 2: //"Pieza Z"
                x1=3;y1=0;
                x2=4;y2=0; 
                x3=4;y3=1;
                x4=5;y4=1;
                break;
            case 3://"Pieza L"
                x1=3;y1=0;
                x2=3;y2=1; 
                x3=4;y3=0;
                x4=5;y4=0;
                break;               
            default://"Pieza I"
                x1=3;y1=0;
                x2=4;y2=0; 
                x3=5;y3=0;
                x4=6;y4=0;
                break;
        }

        //Construcción de la pieza y adición al array 'piezas'.
        piezas.push(new Rectangulo(piezaColor,x1*ANCHO,y1*ALTO));
        piezas.push(new Rectangulo(piezaColor,x2*ANCHO,y2*ALTO));
        piezas.push(new Rectangulo(piezaColor,x3*ANCHO,y3*ALTO));
        piezas.push(new Rectangulo(piezaColor,x4*ANCHO,y4*ALTO)); 
              
    }

    actualizarMatrix(){
        this.tablero=crearMatriz(DIMX,DIMY);
        let x,y;   
        for (let i = 0; i < this.tablero.length; i++) {
            for (let j = 0; j <this.tablero[0].length; j++) {
                for (let k = 0; k < piezas.length; k++){
                    x=piezas[k].x/ANCHO;y=piezas[k].y/ALTO;                   
                    if (x===j&&y===i) {
                        this.tablero[i][j]=1;
                    }                    
                }   
            }                
        } 
    }

    moverPiezaY(){
        for (let i = 0; i < 4; i++) {
            piezas[piezas.length-(i+1)].moverY()            
        } 
        
    }

    moverPiezaX(sentido){
        for (let i = 0; i < 4; i++) {
            piezas[piezas.length-(i+1)].moverX(sentido)            
        } 
    }

    moverPiezasY(){
        for (let i = piezas.length-5; i >= 0 ; i--) {
            piezas[i].moverY();            
        } 
    }

    detectarColY(){
        for (let i = this.tablero.length-2; i > 1; i--){            
            for (let j = piezas.length-1; j > piezas.length-5 ; j--){
                if(this.tablero[piezas[j].y/ALTO+1][piezas[j].x/ANCHO]===1){
                    piezas[j].puedeY=false;
                }
            }
        }
    }

    masacre(){        
        for (let i = 0; i < piezas.length; i++) {
            piezas[i].rect.parentElement.removeChild(piezas[i].rect);            
        }
    } 
    dibujarPiezas(){
        for (let i = 0; i<piezas.length; i++) {
            piezas[i].dibujar();    
        }        
    }
    main(){ 
        
        this.dibujarPiezas(); 
        this.actualizarMatrix();       
        this.masacre();
        this.borrarPiezas();        
        this.actualizarMatrix();        
        this.dibujarPiezas();
        
        if(cont%100===0||!this.puedeMoverY()){
            this.crearPiezaAleatoria();
        }
        cont++;
        this.detectarColY();
        this.actualizarMatrix();
        if(this.puedeMoverY()&&cont%10===0)
            this.moverPiezaY();
        /* if(this.detectarMovY()&&cont%10===0){
            this.moverPiezasY();
        } */
        
        

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

function evaluarArray0(array){
    for (let i = 0; i < DIMX; i++) {
        if(array[i]!==0){
            return false
        }        
    }
    return true;
}


//--------------------------------------------------
//INICIO JUEGO
let element=document.getElementById('div');
tetris=new Tetris(element);

window.setInterval( () => {tetris.main();}, 100);

 for (let i = 0; i < 8; i++) {
    piezas.push(new Rectangulo('red',ANCHO*i,13*ALTO))
    
}

window.addEventListener('keydown', (e) =>{
    if(e.key==='d'){
        tetris.moverPiezaX(1);
    }
    else if(e.key==='a'){
        tetris.moverPiezaX(-1);
    }
    else if(e.key==='s'){
        tetris.moverPiezaY();
    }
    /* else if(e.key==='space'){
        tetris.girar();
    } */
});
//-----------------------------------------------------







//-------------------------------------------------
/*
KeyA
KeyS
Space
//tetris.dibujarPiezas();

/*window.addeventlistener(){
    if D
        console log (D)
        (tetris.cont=1  )
window.addeventlisetene
    A consolelog A
SPACE
S
}*/