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
function clone(obj){
    return JSON.parse(JSON.stringify(obj));
}
/* IT maybe go to conf, but if its not get crowded, keeps here */
var ATRIBUTES={
    STR:0,
    DEX:0,
    CON:0,
    INT:0,
    WIS:0,
    CAR:0,
    WIL:0,
    APP:0,
    LUK:0
};
/* IT Must stay in main*/
var GAME={};


if(!GAME.isStarted){
  start();          
}
function start(){
    GAME.isStarted=true;
    GAME.main={...ATRIBUTES};
    $('#text').html('');
    $('#text').append("<p>What is your name?</p>")
    $('#text').append('<input type="text" class="form-control" id="start-name"> <button type="button" class="btn btn-primary" onclick="_start_continue1()">Continue</button>');  
    
}
function _start_continue1(){
    GAME.main.name=$('#start-name').val();
    $('#text').append("<p>"+GAME.main.name+", What is your biological sex?</p>")
    $('#text').append('<select class="form-control" id="start-sex">'+
                      '    <option value="MALE">Male</option>'+
                      '    <option value="FEMALE">Female</option>'+
                      '</select>'); 
    $('#text').append('<button type="button" class="btn btn-primary" onclick="_start_continue2()">Continue</button>');  
}
function _start_continue2(){
    GAME.main.name=$('#start-name').val();
    $('#text').append("<p>Choose your attributes: <span id='start-remaining-attr'>(remaining:6)</span></p>")
    $('#text').append('<div class="container">');
    $('#text').append('<div class="row">');
    $('#text').append('<div class="col-2"></div>');
    $('#text').append('<div class="col-8 container">');
    
    $('#text').append('<div class="row">');
    $('#text').append('<div class="col-2"><button type="button" class="btn btn-primary" onclick=s"_start_continue2()">Continue</button></div>');
    
    $('#text').append('</div>');   
    
    $('#text').append('</div>');   
    $('#text').append('<div class="col-2"></div>');
    $('#text').append('</div>');   
    $('#text').append('</div>');
    $('#text').append('<button type="button" class="btn btn-primary" onclick="start_continue2()">Continue</button>');  
}