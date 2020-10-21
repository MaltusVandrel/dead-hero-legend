function place(place,param){
    $(document).trigger("load-place",{place:place,param:param});  
}
function setPlace(place,param){
    GAME.place=place;
    $(document).trigger("load-place",{place:place,param:param});  
}
$(document).on("load-place",(event,payload)=>{
    $.get('/game/places/'+payload.place.code+'.htm').then((data)=>{
       $("#text-panel").html("");
       $("#text-panel").append(data);
       if(payload.param&&payload.param.element){
           dataBind(payload.param.element);
           $("[data-element-type='dialog']").each((i,element)=>$(element).hide());
           $(GAME.actualElement).show();
      }else{
          dataBind("[data-first-element]");
          GAME.actualElement="[data-first-element]";
      }
      if(GAME.main&&GAME.main.name)save();
    })
})