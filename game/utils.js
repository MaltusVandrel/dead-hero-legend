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
