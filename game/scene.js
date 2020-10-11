function scene(scene,param){
    $(document).trigger("load-scene",{scene:scene,param:param});  
}
function setScene(scene,param){
    GAME.scene=scene;
    $(document).trigger("load-scene",{scene:scene,param:param});  
}
$(document).on("load-scene",(event,payload)=>{
    $.get('/game/scenes/'+payload.scene.code+'.htm').then((data)=>{
       $("#text-panel").html("");
       $("#text-panel").append(data);
       dataBind();
    })
})