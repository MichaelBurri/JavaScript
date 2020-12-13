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
        //<div> representing the note       
        let noteDiv=document.createElement('div');
        noteDiv.className="noteDiv";
        noteDiv.id=note.id;
        //title
        let noteH1=document.createElement('h1');
        noteH1.innerHTML=note.title;
        noteH1.id='h1'+note.id;
        noteH1.contentEditable=false;
        //body of the message
        let noteTA=document.createElement('textarea');
        noteTA.id='TA'+note.id;
        noteTA.innerHTML=note.text;
        noteTA.readOnly=true;
        //date of creation
        let noteP=document.createElement('p');
        noteP.innerHTML=note.date;
        //some buttons
        //edit
        let noteB1=document.createElement('button');
        noteB1.innerHTML='Edit';
        noteB1.className='bEdit';
        noteB1.id='bEdit'+note.id;        
        //delete
        let noteB2=document.createElement('button');
        noteB2.innerHTML='Delete';
        noteB2.className='bDel';
        noteB2.id='bDel'+note.id;
        //save
        let noteB3=document.createElement('button');
        noteB3.innerHTML='Save';
        noteB3.className='bSave';
        noteB3.id='bSave'+note.id;
        noteB3.disabled=true;

        noteDiv.appendChild(noteH1);
        noteDiv.appendChild(noteTA);
        noteDiv.appendChild(noteP); 
        noteDiv.appendChild(noteB1);
        noteDiv.appendChild(noteB3);  
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

        document.getElementById('bNew').addEventListener('click',(e)=>{
            this.createNote('Title','Write something here...')
        }
        );
    }
    createNote(title, text){
        let note=new Note(title,text);
        this.arrNotes.push(note);
        this.view.paintNote(note);
        this.addEvents(note.id);
    }
    paintAllNotes(){
        this.arrNotes.forEach(e => {
            this.view.deleteNote(e);            
        });
        this.arrNotes.forEach(e => {
            this.view.paintNote(e);            
        });
    }
    deleteNote(id){ 
        this.arrNotes.forEach((note,index)=>{
            if(note.id==id){
                this.arrNotes.splice(index, 1);
                this.view.deleteNote(note);
            }
        })
    }  

    saveNote(id){   //como averiguar el id clicando, y como averiguar el title y el text nuevo     
        this.arrNotes.forEach((note)=>{
            if(note.id==id){
                let newText=document.getElementById('TA'+id).value;
                let newTitle=document.getElementById('h1'+id).innerHTML;
                //note.title=title;               
                this.view.deleteNote(note);
                note.text=newText;
                note.title=newTitle;
                this.paintAllNotes();
                this.addEvents(note.id);
            }
        })  
    }

    addEvents(id){  
        document.getElementById('bDel'+id).addEventListener(
            "click",(e)=>{
                this.deleteNote(id);
            }
        )

        document.getElementById('bEdit'+id).addEventListener(
            "click",(e)=>{
                document.getElementById('bSave'+id).disabled=false;
                document.getElementById('bEdit'+id).disabled=true;
                document.getElementById('h1'+id).contentEditable=true;
                document.getElementById('TA'+id).readOnly=false;
            }
        )

        document.getElementById('bSave'+id).addEventListener(
            "click",(e)=>{
                this.saveNote(id);
                document.getElementById('bSave'+id).disabled=true;
                document.getElementById('bEdit'+id).disabled=false;
                document.getElementById('h1'+id).contentEditable=false;
                document.getElementById('TA'+id).readOnly=true;
            }
        )
    }
}
let c=new Controller();
//c.createNote('MIGUEL','JAJAJA');
//c.addEvents();
//window.setInterval( () => {c.addEvents()}, 1000);

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