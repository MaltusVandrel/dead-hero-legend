function getSaves(){
    let saves=getStorage("saves");
    if(saves==undefined){
        saves=[];
    }else{
        saves=fromJson(saves);
    }
    return saves;
}
function load(id){
    GAME=fromJson(getStorage("GAME:"+id));
    setPlace(GAME.place,{element:GAME.actualElement});  
}
function save(){
    let saves=getSaves();
    if(GAME.id==undefined){
        GAME.id=newId();
        let save={game:GAME.id,date:new Date(),creation:GAME.startDate,gameTime:GAME.time,description:GAME.main.name};
        saves.push(save);
        setStorage('saves',toJson(saves));
        setStorage('GAME:'+GAME.id,toJson(GAME));        
    }else{
        for(let i=0;i<saves.length;i++){
            if(saves[i].game==GAME.id){
                saves[i].gameTime=GAME.time;
                saves[i].description=GAME.main.name;
                saves[i].date=new Date();
                break;                
            }            
        }
        setStorage('saves',toJson(saves));
        setStorage('GAME:'+GAME.id,toJson(GAME));
    }
        

}
function newId(){
    let id = getStorage("saveID");
    if(id==undefined)id=0;
    id++;
    setStorage("saveID",id);
    return id;
}

function doEvent(event){
    var myCustomEvent = new Event(event);
    document.dispatchEvent(myCustomEvent);
}
function observeEvent(event,action){
    document.addEventListener(event, action, false);
}



function doDialog(dialog,action,param){
    if(action)action(param);
    $("[data-element-type='dialog']").each((i,element)=>$(element).hide());
    $("#"+dialog).show();
    dataBind("#"+dialog);
    GAME.actualElement="#"+dialog;     
}
function hideDialogs(){
    $("[data-element-type='dialog']").each((i,element)=>$(element).hide());
    return {'but':function(dialog){
        $("#"+dialog).show();
    }};
}


function firstName(name){    
   if(name!=undefined&&name.length>0){
    return name.trim().split(" ")[0];
   }else{
    if(name==undefined&&GAME.main.name!=undefined){
        return firstName(GAME.main.name);
    }   
    return 'guy';
   }
}

function newGame(){
    GAME={place:PLACES._001START_1,PLACES:{}};
    GAME.main={...ATRIBUTES};
    setPlace(GAME.place);         
}