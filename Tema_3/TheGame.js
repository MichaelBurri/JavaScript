class Player{
    constructor(name){
        this.name=name;
        this.move='';
        this.win=0;
        this.loss=0
    }
}
class Game{
    constructor(){
        this.player1;
        this.player2;
    }

    static roll() {
        let res;
        switch((Math.floor(Math.random()*3+1))){
            case 1: res='Piedra';break;
            case 2: res='Tijera';break;
            case 3: res='Papel';break;
        }
        return res;
    }

    static evaluateRoll(p1,p2){
        let ev;
        if (p1===p2) {
            ev='Empate';            
        }
        else{
            if(p1==='Piedra'){
                if(p2==='Tijera'){
                    ev='GANASTE!';
                }
                else{ev='¿Cómo va a perder una piedra contra el papel? Este juego no tiene sentido'}
            }
            else if(p1==='Tijera'){
                if(p2==='Papel'){
                    ev='GANASTE!';
                }
                else{ev='Perdiste'};
            }
            else if(p1==='Papel'){
                if (p2==='Piedra') {
                    ez='GANASTE!';
                }
                else{ev='Perdiste';}
            }
        }
        return ev;
    }
}



const game=new Game();
window.alert('Bienvenido a la partida de Piedra, Papel ó Tijera.');
game.player1=new Player(window.prompt('Nombre jugador 1: '));
game.player2=new Player(window.prompt('Nombre jugador 2: '));
var cont='Si';var a;
do {
    do {
        a=window.prompt('¿Piedra, Papel ó Tijera?',"Piedra");
        game.player1.move=a;
    } while (a!='Piedra'&&a!='Papel'&&a!='Tijera');

    game.player2.move=Game.roll();
    console.log(game.player1.name+" "+game.player1.move+" - "+game.player2.move+" "+game.player2.name+"\n"+Game.evaluateRoll(game.player1.move,game.player2.move));
    
    if(Game.evaluateRoll(game.player1.move,game.player2.move)==='GANASTE!'){
        game.player1.win++;
        game.player2.loss++;
    }
    else if (Game.evaluateRoll(game.player1.move,game.player2.move)==='Empate') {
        //No hago nada
    }
    else{
        game.player2.win++;
        game.player1.loss++;
    }
    console.log(game.player1.name+" W-L: "+game.player1.win+" - "+game.player1.loss);
    console.log(game.player2.name+" W-L: "+game.player2.win+" - "+game.player2.loss);

    cont=window.prompt("¿echamos otra?",'Si').toUpperCase();
} while (cont==='SI');
console.log("GG WP.");



