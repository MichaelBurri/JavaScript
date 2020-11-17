class Bola{
    constructor(){
        
    }


}
window.onload(){
    crear();
}

function crear(){
    let circ=document.createElementNS("http://www.w3.org/2000/svg","circle");
    circ.setAttributeNS(null, 'id', 1);
    circ.setAttributeNS(null, 'cx', aleatorio(0,500));
    circ.setAttributeNS(null, 'cy', aleatorio(0,500));
    circ.setAttributeNS(null, 'r', aleatorio(0,50));
    circ.setAttributeNS(null, 'stroke', 'black');
    circ.setAttributeNS(null, 'stroke-width',aleatorio(0,4));
    circ.setAttributeNS(null, 'fill', (aleatorio(0,255),aleatorio(0,255),aleatorio(0,255)));
    
    document.getElementById("Eseuvege").appendChild(circ);
}
    

function aleatorio(num1,num2){
    return parseInt(Math.random()*(num2-num1)+num1);
}
        