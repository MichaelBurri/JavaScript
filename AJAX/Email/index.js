function loadDoc(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            maquetaRespuesta(JSON.parse(this.responseText));             
        }
    };
    xhttp.open('GET', 'correos.json',true );
    xhttp.send();
}

function maquetaRespuesta(objetoJSON) {
    for (let i = 0; i < objetoJSON.length; i++) {
        console.log(objetoJSON.listaCorreos[i].remitente);        
    }

    /* let tabla=document.createElement('table'); 
            
            datos=JSON.parse(this.responseText);
            for (let i = 0; i < datos.listaCorreos.length ; i++) {
                let row=document.createElement('tr');
                for (let j = 0; j < datos.listaCorreos[i].length; j++) {
                    console.log(datos.listaCorreos[i][j])
                    
                }
                row.appendChild(document.createElement('td').innerHTML=datos.listaCorreos[i].remitente);
                row.appendChild(document.createElement('td').innerHTML=datos.listaCorreos[i].asunto);
                row.appendChild(document.createElement('td').innerHTML=datos.listaCorreos[i].mensaje);
                tabla.appendChild(row);              
            }
            document.body.appendChild(tabla); */
}