
var mapPage;
$.get( "game/widget/map/map-page.html", function( data ) {
    mapPage=data;
});
var game={};
game.place=baseOne;

function showMap(){
    var div = $El('div');
    div.html(mapPage);
    div.attr('id','root_div_map');
    $('body').append(div);
    game.map.init();   
}
function closeMap(){
    $("#root_div_map" ).remove();   
}