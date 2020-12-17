function loadDoc(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            //document.getElementById('demo').innerHTML+=this.responseText;

             datos=JSON.parse(this.responseText);
            for (let i = 0; i < datos.listaNotas.length; i++) {
                alert(datos.listaNotas[i].titulo)
                
            } 
        }
    }
    xhttp.open('GET', 'jose.txt',true );
    xhttp.send();
}