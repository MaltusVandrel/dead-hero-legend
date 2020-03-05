
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
    shapes:[{name:'Face Feminine 1',path:'img/face/shape/face-f1.svg'}],
    ear:[{name:'Ear Basic',path:'img/face/ear/ear-b.svg'}],
    eyeShape:[{name:'Eye Shape Basic 1',path:'img/face/eye/shape/shape-b1.svg'}],
    eyeEsclera:[{name:'Eye Esclera Basic',path:'img/face/eye/esclera/esclera-b.svg'}],
    eyeIris:[{name:'Eye Iris Basic',path:'img/face/eye/iris/iris-b.svg'}],
    hair:[{name:'Hair Feminine 1',path:'img/face/hair/hair-f1.svg'}],
    mouth:[{name:'Mouth Feminine 1',path:'img/face/mouth/mouth-f1.svg'}],
    nose:[{name:'Nose Basic 1',path:'img/face/nose/nose-b1.svg'}]    
};
//var rawSvg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg [...]>"';
//var draw = SVG('paper');
//var store = draw.svg(rawSvg);

//store.polygon1238.fill('#f06');
function getSvg(){
    
    var promised = new Promise(
        (resolve, reject)=>{
            var countRequest=0;
            var countResolved=0;
            for(let key of Object.keys(svgs)){
                let partCollection=svgs[key];
                countRequest+=partCollection.length;
                for(let part of partCollection){
                   
                    $.get(part.path, function( data ) {
                        part.svg=data;;
                        countResolved++;
                        if(countRequest==countRequest){
                            resolve();     
                        };
                    },'text');
                }
            } 
        }
    )
    return promised;
       
}
var portrait;
getSvg().then(()=>{
    portrait = SVG('portrait').size('500', '500');;

    for(let key of Object.keys(svgs)){
        let partCollection=svgs[key];
        portrait.svg(partCollection[0].svg);        
    } 
});