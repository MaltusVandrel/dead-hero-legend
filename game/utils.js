function clone(obj){
    return fromJson(toJson(obj));
}
function toJson(obj){
    return JSON.stringify(obj);
}
function fromJson(str){
    return JSON.parse(str);
}

function getStorage(key){
  return localStorage.getItem(key);
}
function setStorage(key,val){
    localStorage.setItem(key,val);
}

var textPanel;
function clearText(){
    $('#text').html('');
    textPanel='';
}
function addText(str){
    if(textPanel==undefined)textPanel='';
    textPanel+=str;
}
function showText(){
    $('#text').append(textPanel);
    textPanel='';
}

function doEvent(event){
    var myCustomEvent = new Event(event);
    document.dispatchEvent(myCustomEvent);
}
function observeEvent(event,action){
    document.addEventListener(event, action, false);
}
function dataBind(){
    $("[data-if]").each((index,element)=>{
        var test=$(element).data("if");
        var textElse=$(element).data("else");
        var result=eval(test);
        console.info(test,result)
        if(!result){
            if(textElse==undefined){
                $(element).hide();
            }else{
                $(element).html(textElse);
            }
        }else{
            $(element).show();
        }
    });
    $("[data-bind]").each((index,element)=>{
        var dataPath=$(element).data("bind");
        $(element).html(eval(dataPath));
    });
    
    
}
function firstName(name){
   if(name!=undefined&&name.length>0){
    return name.trim().split(" ")[0];
   }else{
       return 'guy';
   }
}
function hideDialogs(){
    $("[data-element-type='dialog']").each((i,element)=>$(element).hide());
    return {'but':function(dialog){
        $("#"+dialog).show();
    }};
}
function doDialog(dialog,action,param){
    if(action)action(param);
    $("[data-element-type='dialog']").each((i,element)=>$(element).hide());
    $("#"+dialog).show();
    dataBind();     
}