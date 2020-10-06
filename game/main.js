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
var ATRIBUTE_INFO={
    STR:{name:'Strength',info:"It's the sum of your physical potential.",abbreviation:"Str"},
    DEX:{name:'Dexterity',info:"It's your agility and swiftness.",abbreviation:"Dex"},
    CON:{name:'Constitution',info:"It's your endurance and resistence.",abbreviation:"Con"},
    INT:{name:'Inteligence',info:"It's the sum of your mental potential.",abbreviation:"Int"},
    WIS:{name:'Wisdom',info:"It's your perception and instinct.",abbreviation:"Wis"},
    CAR:{name:'Charism',info:"It's your alure and social hability.",abbreviation:"Car"},
    WIL:{name:'Willpower',info:"It's your psicological resilience.",abbreviation:"Wil"},
    APP:{name:'Appearence',info:"It's the sum of looks and expression.",abbreviation:"App"},
    LUK:{name:'Luck',info:"It's represent any odd that can sway positively in your way.",abbreviation:"Luk"}
};

/* IT Must stay in main*/
var GAME={};


if(!GAME.isStarted){
  start();          
}
function start(){
    GAME.isStarted=true;
    GAME.main={...ATRIBUTES};
    GAME.main.pointsToDistribute=6;
    $('#text').html('');
    $('#text').append("<p>What is your name?</p>")
    $('#text').append('<input type="text" class="form-control" id="start-name"> <br/> <button type="button" class="btn btn-primary" id="btn_start_continue1" onclick="_start_continue1()">Continue</button>');  
    
}
function _start_continue1(){
    $('#btn_start_continue1').remove();
    GAME.main.name=$('#start-name').val();
    $('#text').append("<p>"+GAME.main.name+", What is your biological sex?</p>")
    $('#text').append('<select class="form-control" id="start-sex">'+
                      '    <option value="MALE">Male</option>'+
                      '    <option value="FEMALE">Female</option>'+
                      '</select>'); 
    $('#text').append('<br/><button type="button" class="btn btn-primary" id="btn_start_continue2" onclick="_start_continue2()">Continue</button>');  
}
function _start_continue2(){
    $('#btn_start_continue2').remove();
    GAME.main.name=$('#start-name').val();
    var text="";
    text+=("<p>Choose your attributes: (Max:2), <span id='start-remaining-attr'>(remaining:"+GAME.main.pointsToDistribute+")</span></p>");
    text+=('<div class="container-fluid">')
    for(let key of Object.keys(ATRIBUTES)){
        text+=('<div class="row">');
            text+=('<div class="col-2">');
            text+=('</div>');
            
            text+=('<div class="col-2">');
            text+=('<button type="button" id="start-btn-down-'+key+'" class="btn btn-primary btn-sm" onclick="_start_attr_down(\''+key+'\')" disabled><i class="fa fa-angle-down"></i></button>');
            text+=('</div>');
            
            text+=('<div class="col-4">');
            text+=('<p id="attr-'+key+'">'+GAME.main[key]+" "+ATRIBUTE_INFO[key].name+'</p>');
            text+=('</div>');
            

            text+=('<div class="col-2">');
            text+=('<button type="button" id="start-btn-up-'+key+'" class="btn btn-primary btn-sm" onclick="_start_attr_up(\''+key+'\')" ><i class="fa fa-angle-up"></i></button>');
            text+=('</div>');
            
            text+=('<div class="col-2">');
            text+=('</div>');
        
        text+=('</div>');
    }
    text+=('</div>');
    text+=('<br/><button type="button" class="btn btn-primary" onclick="start_continue3()" id="btn_start_continue3" disabled>Continue</button>'); 
    $('#text').append(text);
}
function _start_continue3(){
    alert('salvar!')
}
function _start_attr_down(key){
    GAME.main.pointsToDistribute++;
    $('#start-remaining-attr').html("(remaining:"+GAME.main.pointsToDistribute+")");
    GAME.main[key]--;
    $('#attr-'+key).html(GAME.main[key]+" "+ATRIBUTE_INFO[key].name);
    _doDisableButtons();
}
function _start_attr_up(key){
    GAME.main.pointsToDistribute--;
    $('#start-remaining-attr').html("(remaining:"+GAME.main.pointsToDistribute+")");
    GAME.main[key]++;
    $('#attr-'+key).html(GAME.main[key]+" "+ATRIBUTE_INFO[key].name);
    _doDisableButtons();  
}
function _doDisableButtons(){
    
    for(let any of Object.keys(ATRIBUTES)){
        if(GAME.main.pointsToDistribute<=0||GAME.main[any]>=2){
            $('#start-btn-up-'+any).prop('disabled', true);
        }else{
            $('#start-btn-up-'+any).prop('disabled', false);
        }
        if(GAME.main.pointsToDistribute>=6||GAME.main[any]<=0){
            $('#start-btn-down-'+any).prop('disabled', true);
        }else{
            $('#start-btn-down-'+any).prop('disabled', false);
        }
    } 
    if(GAME.main.pointsToDistribute==0){
        $('#btn_start_continue3').prop('disabled', false);
    }else{
        $('#btn_start_continue3').prop('disabled', true);
    }
}