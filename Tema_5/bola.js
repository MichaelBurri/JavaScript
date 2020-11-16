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

}

function choque(bola1,bola2){
    if (bola1.cx-bola2.cx-(bola1.r-bola2.r)<0){
        
    }
}