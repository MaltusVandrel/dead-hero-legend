/*
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
/*

usar pngs e 
  background-image: linear-gradient(red, red),url("paper.gif");
  background-blend-mode: color;
*/

/**
 *
 * Ungly code is only ungly when undocumented and unreadable. 
 * 
 **/
/* IT Shoud go to helper*/

/* IT maybe go to conf, but if its not get crowded, keeps here */

/* IT Must stay in main*/
var GAME={};
if(localStorage.getItem('save1')!=undefined)GAME=JSON.parse(localStorage.getItem('save1'));


if(!GAME.isStarted){
  start();          
}
