window.onload=()=>{
    
    bola=document.getElementById("bola");
    bola2=document.getElementById("bola2");
    bola3=document.getElementById("bola3");

    setInterval(anima,20);
    
}
//document.getElementByTagName("svg")[0].getBoundingClientRect();
var posX=50; var posY=50;
var incX=2; var incY=2.5;

var posX2=450; var posY2=50;
var incX2=5; var incY2=3;

var posX3=250; var posY3=400;
var incX3=1; var incY3=1;

var bola,bola2,bola3;


function anima(){
     
    bola.setAttribute("cx", posX);
    bola.setAttribute("cy", posY);
    posX+=incX; posY+=incY;
    if (posX>=460||posX<40){
        incX*=-1;
    }
    if (posY>=460||posY<40){
        incY*=-1;
    }

    bola2.setAttribute("cx", posX2);
    bola2.setAttribute("cy", posY2);
    posX2+=incX2; posY2+=incY2;
    if (posX2>=480||posX2<20){
        incX2*=-1;
    }
    if (posY2>=480||posY2<20){
        incY2*=-1;
    }

    bola3.setAttribute("cx", posX3);
    bola3.setAttribute("cy", posY3);
    posX3+=incX3; posY3+=incY3;
    if (posX3>=420||posX3<80){
        incX3*=-1;
    }
    if (posY3>=420||posY3<80){
        incY3*=-1;
    }
    choque(bola,bola2);
    choque(bola2,bola3);    
    choque(bola,bola3);
}

function choque(bol1,bol2){
    let x1=bol1.getAttribute('cx');
    let x2=bol2.getAttribute('cx');
    let y1=bol1.getAttribute('cy');
    let y2=bol2.getAttribute('cy');
    let r1=parseInt(bol1.getAttribute('r'));
    let r2=parseInt(bol2.getAttribute('r'));
    
    console.log(r1+r2);
    if (Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2))<=(r1+r2)){
        alert("NOICE");
    }
    //console.log(Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)))


    //Mención especial a Jesús López Pinzolas por ayudarme a sacar los vectores de colisión.
}



