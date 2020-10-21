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

function fullDate(date){
    if(date==undefined)return "???";
    date=new Date(date);
    let dateStr=date.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
    let hourStr=date.toLocaleTimeString();
    return dateStr+" "+hourStr;
}
function gameTime(time){    
    let minutes = time%60;
    let totalHours = (time-minutes)/60;
    let hours = totalHours%24;
    let days=(totalHours-hours)/60;
    return days+" days, "+hours+"H, "+minutes+"min";
}