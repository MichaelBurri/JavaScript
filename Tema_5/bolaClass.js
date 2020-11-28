class Bola{
    constructor(svg, id){                
        this.id=id;
        this.cx=aleatorio(0,500);
        this.cy=aleatorio(0,500);
        this.r=aleatorio(1,50);
        this.fill="rgb("+aleatorio(0,255)+","+aleatorio(0,255)+","+aleatorio(0,255)+")";
        //
        this.circ=document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.circ.setAttributeNS(null, 'id', "circ"+this.id);
        this.circ.setAttributeNS(null, 'cx', this.cx);
        this.circ.setAttributeNS(null, 'cy', this.cy);
        this.circ.setAttributeNS(null, 'r', this.r);
        this.circ.setAttributeNS(null, 'fill', this.fill);
        document.getElementById(svg).appendChild(this.circ);
    }
    
    animar(){
        bola=this.circ;
        bola.setAttributeNS(null, 'cx', 600);
        bola.setAttributeNS(null, 'cy', 500);
    }
}

var bolas=[];
for (let i = 0; i < 5; i++) {
   let bola=new Bola("svg",i);
   bolas.push(bola);
    
}
 function animarTodas() {
    for (let i = 0; i < 5; i++)
        bolas[i].setAttributeNS(null, 'cx', bolas[i].circ.cx+5);
        bolas[i].setAttributeNS(null, 'cy', 500);
} 
    




//let bola1=new Bola("svg",1);
function aleatorio(num1,num2){
    return parseInt(Math.random()*(num2-num1)+num1);
}
/* window.onload=()=>{

    setInterval(animarTodas,20);
    
}; */
        