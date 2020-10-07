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
    text+=('<br/><button type="button" class="btn btn-primary" onclick="_start_continue3()" id="btn_start_continue3" disabled>Continue</button>'); 
    $('#text').append(text);
}
function _start_continue3(){
    localStorage.setItem('save1', JSON.stringify(GAME));
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