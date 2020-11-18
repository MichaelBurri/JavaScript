window.onload=()=>{
    
    bola=document.getElementById("bola");
    bola2=document.getElementById("bola2");
    bola3=document.getElementById("bola3");

    setInterval(anima,20);
    
};
//document.getElementByTagName("svg")[0].getBoundingClientRect();
var posX=50; var posY=50;
var incX=2; var incY=2.5;
var posXAnterior = posX; var posYAnterior = posY;

var posX2=450; var posY2=50;
var incX2=5; var incY2=3;
var posXAnterior2 = posX2; var posYAnterior2 = posY2;

var posX3=250; var posY3=400;
var incX3=1; var incY3=1;
var posXAnterior3 = posX3; var posYAnterior3 = posY3;

var bola,bola2,bola3;


function anima(){
     
    choque();
    bola.setAttribute("cx", posX);
    bola.setAttribute("cy", posY);
    posXAnterior = posX;
    posYAnterior = posY;
    posX+=incX; posY+=incY;
    if (posX>=460||posX<40){
        posX=posXAnterior;
        incX*=-1;
    }
    if (posY>=460||posY<40){
        posY=posYAnterior;
        incY*=-1;
    }

    bola2.setAttribute("cx", posX2);
    bola2.setAttribute("cy", posY2);
    posXAnterior2 = posX2;
    posYAnterior2 = posY2;
    posX2+=incX2; posY2+=incY2;
    if (posX2>=480||posX2<20){
        posX2=posXAnterior2;
        incX2*=-1;
    }
    if (posY2>=480||posY2<20){
        posY2=posYAnterior2;
        incY2*=-1;
    }

    bola3.setAttribute("cx", posX3);
    bola3.setAttribute("cy", posY3);
    posXAnterior3 = posX3;
    posYAnterior3 = posY3;
    posX3+=incX3; posY3+=incY3;
    if (posX3>=420||posX3<80){
        posX3=posXAnterior3;
        incX3*=-1;
    }
    if (posY3>=420||posY3<80){
        posY3=posYAnterior3;
        incY3*=-1;
    }
    
}

function choque(){

    // Datos necesarios para calcular los choques
    let radios = [parseInt(bola.getAttribute('r')), parseInt(bola2.getAttribute('r')), parseInt(bola3.getAttribute('r'))];
    let posiciones = [[posX, posY], [posX2, posY2], [posX3, posY3]];
    let posicionesAnteriores = [[posXAnterior, posYAnterior], [posXAnterior2, posYAnterior2], [posXAnterior3, posYAnterior3]];
    let velocidades = [[incX, incY], [incX2, incY2], [incX3, incY3]];
    // Masas de las bolas, se podrían calcular según una densidad superficial definida
    let masas = [1, 1, 1];

    // Recorrer las tres bolas
    for (let i = 0; i < 3; i++) {
        for (let j = i+1; j < 3; j++) {
            // Vector posicion relativa entre las dos bolas. Para calcular distancia.
            let posicionRelativa = [posiciones[j][0] - posiciones[i][0], posiciones[j][1] - posiciones[i][1]];
            let distancia = Math.sqrt(Math.pow(posicionRelativa[0], 2) + Math.pow(posicionRelativa[1], 2));

            // Si se produce el choque se realiza el resto de cálculos. Según https://en.wikipedia.org/wiki/Elastic_collision#Two-dimensional_collision_with_two_moving_objects
            if (distancia <= (radios[j] + radios[i])) {
                posiciones[i][0] = posicionesAnteriores[i][0];
                posiciones[i][1] = posicionesAnteriores[i][1];
                posiciones[j][0] = posicionesAnteriores[j][0];
                posiciones[j][1] = posicionesAnteriores[j][1];
                // Coeficientes para calcular las nuevas velocidades
                let coeficiente1 = productoEscalar2D(velocidades[i][0] - velocidades[j][0], velocidades[i][1] - velocidades[j][1], posiciones[i][0] - posiciones[j][0], posiciones[i][1] - posiciones[j][1]);
                coeficiente1 /= productoEscalar2D(posiciones[i][0] - posiciones[j][0], posiciones[i][1] - posiciones[j][1], posiciones[i][0] - posiciones[j][0], posiciones[i][1] - posiciones[j][1]);

                let coeficiente2 = productoEscalar2D(velocidades[j][0] - velocidades[i][0], velocidades[j][1] - velocidades[i][1], posiciones[j][0] - posiciones[i][0], posiciones[j][1] - posiciones[i][1]);
                coeficiente2 /= productoEscalar2D(posiciones[j][0] - posiciones[i][0], posiciones[j][1] - posiciones[i][1], posiciones[j][0] - posiciones[i][0], posiciones[j][1] - posiciones[i][1]);

                // Actualizar velocidades
                velocidades[i][0] -= coeficiente1 * (posiciones[i][0] - posiciones[j][0]) * (2.0 * masas[j]) / (masas[i] + masas[j]);
                velocidades[j][0] -= coeficiente2 * (posiciones[j][0] - posiciones[i][0]) * (2.0 * masas[i]) / (masas[i] + masas[j]);
                velocidades[i][1] -= coeficiente1 * (posiciones[i][1] - posiciones[j][1]) * (2.0 * masas[j]) / (masas[i] + masas[j]);
                velocidades[j][1] -= coeficiente2 * (posiciones[j][1] - posiciones[i][1]) * (2.0 * masas[i]) / (masas[i] + masas[j]);
            }
        }
    }
    // Actualizar las posiciones que se utilizan en el resto del programa
    posX = posiciones[0][0];
    posY = posiciones[0][1];
    posX2 = posiciones[1][0];
    posY2 = posiciones[1][1];
    posX3 = posiciones[2][0];
    posY3 = posiciones[2][1];
    // Actualizar las velocidades que se utilizan en el resto del programa
    incX = velocidades[0][0];
    incY = velocidades[0][1];
    incX2 = velocidades[1][0];
    incY2 = velocidades[1][1];
    incX3 = velocidades[2][0];
    incY3 = velocidades[2][1];

    //Mención especial a Jesús López Pinzolas por ayudarme a sacar los vectores de colisión.
}

function productoEscalar2D(x1, y1, x2, y2) {
    return x1 * x2 + y1 * y2;
}

