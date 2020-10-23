
var gameToDelete=undefined;
function doStartMenu(){
    $("#text-panel").html('');
    $("#text-panel").append('<button type="button" class="btn btn-secondary btn-lg btn-block" onclick="newGame()">New Game</button>');
    let saves = getSaves();
    for(let save of saves){
        $("#text-panel").append(
        '<div class="card container">'
        +'<div class="card-body row">'
        +'<h3 class="col-11">'+save.description+'</h3><div class="col-1"><button type="button" class="btn btn-link" data-toggle="modal" data-target="#deleteSave" onclick="$(\'#saveName\').html(\''+save.description+'\');gameToDelete='+save.game+';"><i style="color:Tomato" class="fa fa-times fa-lg"></i></button></div>'
        +'<small class="col-8">Created in '+fullDate(save.creation)+'<br/>Last saved in '+fullDate(save.date)+'<br/> In game time '+gameTime(save.gameTime)+'</small>'
        +'<div class="col-4"><button type="button" class="btn btn-secondary  btn-block" onclick="load('+save.game+')">Continue</button></div>'
        +'</div></div>'
        
        );
    }
}
function deleteGame(){
    let saves = getSaves()
    let savesToPersist=[];
    for(let save of saves){
        if(gameToDelete!=save.game)savesToPersist.push(save);
    }
    setStorage('saves',toJson(savesToPersist));
    deleteStorage('GAME:'+gameToDelete);
    doStartMenu();
}
doStartMenu();
//criar digest layout if, for and binding
//criar conts de scenes
//organizar scenes
//terminar start
//washing ashore