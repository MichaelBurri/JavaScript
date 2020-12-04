
/* console.log('siege');
let m=[];
var n=[[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4]];




for (let i = 0; i < 5; i++) {
    m[i]=[];
    for (let j = 0; j < 5; j++) {
        m[i][j]=(i+j);        
    }    
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(m[i][j]);        
    }
} */
/* 
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
var m=crearMatriz(10,10);
var sw;
m[0]=[0,1,1,1,1,1,1,1,1,1];
m[1]=[1,1,1,1,1,1,1,1,1,1];
m[2]=[1,1,1,1,1,1,1,1,1,1];
m[3]=[2,1,1,1,1,1,1,1,1,1];
m[4]=[0,1,1,1,0,1,1,0,1,1];
m[5]=[0,1,1,0,1,1,0,1,1,1];
m[7]=[1,1,1,1,1,1,1,1,1,1];
for (let k = 0; k < 9; k++) {
    for (let i = 0; i < m.length; i++) {
    sw=true;
    for (let j = 0; j < m[0].length; j++) {
        if(m[i][j]!=1){
            sw=false;            
        }
           
    }
    if(sw===true){
        m.splice(i,1)
    }
     
}
    
}


for (let i = 0; i < 5; i++) {
    if (i===3) {
        if(i<5){
           continue; 
        }
        
    }
    console.log(i);
    
} */
KeyD
KeyA
KeyS
Space event.code
console.log(KeyboardEvent.key);
