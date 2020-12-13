class Note{
    constructor(title='Title', text='Text'){
        this.title=title;
        this.text=text;
        let time=new Date();
        this.date=time.toDateString()+" "+time.toLocaleTimeString();
        this.createdAgo='Created 0 minutes ago';
        this.id=time.getTime().toString();
    }   
}

class NoteView{
    constructor(){
        let header=document.createElement('header');
        let newButton=document.createElement('button');
        newButton.innerHTML='New Note';
        newButton.id='bNew';
        document.body.appendChild(header);
        header.appendChild(newButton);
        this.mainDiv=document.createElement('div');
        this.mainDiv.className="mainDiv";
        document.body.appendChild(this.mainDiv);
    }
    paintNote(note=new Note()){
        var n=note;
        let noteDiv=document.createElement('div');
        noteDiv.className="noteDiv";
        noteDiv.id=note.id;
        let noteH1=document.createElement('h1');
        noteH1.innerHTML=note.title;
        let noteTA=document.createElement('textarea');
        noteTA.innerHTML=note.text;
        let noteP=document.createElement('p');
        noteP.innerHTML=note.date;
        let noteB1=document.createElement('button');
        noteB1.innerHTML='Edit';
        noteB1.className='bEdit';
        noteB1.id='bEdit'+note.id;
        let noteB2=document.createElement('button');
        noteB2.innerHTML='Delete';
        noteB2.className='bDel';
        noteB2.id='bDel'+note.id;
        
        noteDiv.appendChild(noteH1);
        noteDiv.appendChild(noteTA);
        noteDiv.appendChild(noteP); 
        noteDiv.appendChild(noteB1);  
        noteDiv.appendChild(noteB2);   

        this.mainDiv.appendChild(noteDiv);

    }
    deleteNote(note){
        let notes=Array.from(this.mainDiv.getElementsByClassName('noteDiv'));
        notes.forEach((e)=>{
            if(e.id==note.id){
                this.mainDiv.removeChild(e);
            }
        }
        )
    }
}
class Controller{
    constructor(){
        this.arrNotes=[];
        this.view=new NoteView();
    }
    createNote(title, text){
        let note=new Note(title,text);
        this.arrNotes.push(note);
        this.view.paintNote(note);
    }
    deleteNote(id){ 
        this.arrNotes.forEach((note,index)=>{
            if(note.id==id){
                this.arrNotes.splice(index, 1);
                this.view.deleteNote(note);
            }
        })
    }
    addEvents(){
        this.quitEvents();
        let newButton=document.getElementById('bNew');
        newButton.addEventListener('click',(e)=>{
        this.createNote('Title','Write something here...')});

        let bDels=document.getElementsByClassName('bDel');
        var myEvent = function (e) {
            console.log('NOice');
        };
       
        for (let i = 0; i < bDels.length; i++) {   
            bDels[i].removeEventListener('click',myEvent);        
            bDels[i].addEventListener('click',myEvent);
        }
            
        
        

        /* let editButton=document.getElementById('bEdit');
        editButton.addEventListener('click',(e)=>{
           this.editNote(editButton.parentElement.id,) 
        }
        )
        ; */
    }

    quitEvents(){
        var elems = document.body.getElementsByTagName("*");
        for (let i = 0; i < elems.length; i++) {
            //elems[i].removeEventListener();
            
        }
    }
    editNote(id,title,text){   //como averiguar el id clicando, y como averiguar el title y el text nuevo     
        this.arrNotes.forEach((note)=>{
            if(note.id==id){
                this.view.deleteNote(note);
                note.title=title;
                note.text=text;
                this.view.paintNote(note)
            }
        })  
    }
}
let c=new Controller();
//c.createNote('MIGUEL','JAJAJA');
c.addEvents();
window.setInterval( () => {c.addEvents()}, 1000);

/*
En ella debes permitir:

Creación de Notas: Cada nota tiene un título, un texto y una hora de creación.
Destrucción de notas: Debe poder eliminarse una nota ya creada.
Todo el desarrollo debe cumplir con el paradigma MVC. Deben desarrollarse dos vistas diferentes que el usuario 
debe poder seleccionar en cualquier momento. 
Además, para almacenar la información de las notas debemos usar JSON.

Se valorará el tener un proyecto acabado totalmente funcional (lo cual incluye la interfaz)

Todo esto sería el mínimo a realizar (5 puntos). Además se pide:

Cambiar notas de lugar en pantalla (Drag&Drop)
Modificar el contenido de una nota ya creada.
Mostrar el tiempo transcurrido desde la creación de la nota (debe mostrarlo en minutos y actualizarse dinámicamente).
Como ejemplos en los que basarte tienes las siguientes webs:

http://note.ly/#
https://www.mystickies.com/
https://noteapp.com/lyRpT37g0r*/


/*
Hacer nota editable. document.getElementsByTagName('TextArea')[0].removeAttribute('readonly')
*/