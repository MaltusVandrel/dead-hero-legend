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
       dataBind("[data-first-element]");
    })
})