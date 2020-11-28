var count=0;


function update() {
    count++;
    document.getElementsByTagName('div')[0].innerHTML=count;
}

function crear(id){
    x=document.createElement("IMG");
    x.setAttribute("id","imag"+id)
    x.setAttribute("src", "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5a659c6f5bafe8074be92846/gatito-blanco-negro_0.jpg");
    x.setAttribute("width", "200");
    x.setAttribute("height", "200");
    x.setAttribute("alt", "Gatos");
    document.body.appendChild(x);
}
for (let i = 0; i < 10; i++) {
    crear(i);    
}

for (let i = 0; i < 10; i++) {
    document.getElementById("imag"+i).addEventListener("click", update);
}
