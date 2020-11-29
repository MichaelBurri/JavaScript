class Bola{
    constructor(svg, id){                
        this.id=id;
        this.cx=aleatorio(0,500);
        this.cy=aleatorio(0,500);
        this.r=aleatorio(1,50);
        this.fill="rgb("+aleatorio(0,255)+","+aleatorio(0,255)+","+aleatorio(0,255)+")";
        this.velx=aleatorio(1,300)/100;
        this.vely=aleatorio(1,300)/100;
        //
        this.circ=document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.circ.setAttributeNS(null, 'id', "circ"+this.id);
        this.circ.setAttributeNS(null, 'cx', this.cx);
        this.circ.setAttributeNS(null, 'cy', this.cy);
        this.circ.setAttributeNS(null, 'r', this.r);
        this.circ.setAttributeNS(null, 'fill', this.fill);
        document.getElementById(svg).appendChild(this.circ);
    }
    
}

var bolas=[];
for (let i = 0; i < 5; i++) {
   let bola=new Bola("svg",i);
   bolas.push(bola);
    
}
function animarTodas() {
    for (let i = 0; i < 5; i++){
        bolas[i].circ.setAttributeNS(null, 'cx', (parseInt(bolas[i].circ.getAttributeNS(null, 'cx'))+bolas[i].velx));
        bolas[i].circ.setAttributeNS(null, 'cy', (parseInt(bolas[i].circ.getAttributeNS(null, 'cy'))+bolas[i].vely));
    }
} 

function detectarColision(i){
    
}
    




//let bola1=new Bola("svg",1);
function aleatorio(num1,num2){
    return parseInt(Math.random()*(num2-num1)+num1);
}
 window.onload=()=>{

    setInterval(animarTodas,20);
    
}; 
        