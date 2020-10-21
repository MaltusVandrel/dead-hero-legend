

$("#text-panel").append('<button type="button" class="btn btn-secondary btn-lg btn-block" onclick="newGame()">New Game</button>');
let saves = getSaves()
for(let save of saves){
    $("#text-panel").append('<button type="button" class="btn btn-secondary btn-lg btn-block" onclick="load('+save.game+')">'
    +save.description
    +'<br/>'
    +'<small>Created in '+fullDate(save.creation)+'; Last saved in '+fullDate(save.date)+'; In game time '+gameTime(save.gameTime)+'</small>'
    +'</button>');
}
//criar digest layout if, for and binding
//criar conts de scenes
//organizar scenes
//terminar start
//washing ashore