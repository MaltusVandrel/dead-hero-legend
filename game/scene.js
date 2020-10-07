function scene(scene,param){
    $(document).trigger("load-scene",{scene:scene,param:param});  
}
$(document).on("load-scene",(event,payload)=>{
    $.get('/game/scenes/'+payload.scene+'.htm').then((data)=>{
       $("#text-panel").append(data);
    })
})