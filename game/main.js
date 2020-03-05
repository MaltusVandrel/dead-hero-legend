
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
let svgs={
    shapes:[{name:'Feminine Face 1',path:'img/face/shape/face-f1.svg'}],

};
//var rawSvg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg [...]>"';
//var draw = SVG('paper');
//var store = draw.svg(rawSvg);

store.polygon1238.fill('#f06');
function getSvg(){
    $.get( "game/widget/map/map-page.html", function( data ) {
        mapPage=data;
    });
}