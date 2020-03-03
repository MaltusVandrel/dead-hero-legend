
game.map={};
game.map.centralizeOn=(place)=>{
  var mainWidth = $( document ).width();
  var mainHeight = $( document ).height();
  var mapWidth=$('#map').width()
  var mapHeight=$('#map').height()
  var offsetBase=$('#map').offset();
  offsetBase.y=offsetBase.top;
  offsetBase.x=offsetBase.left;
  var centerPointX=((mainWidth)/2);
  var centerPointY=((mainHeight)/2);

  var x=mapHeight/2;
  var y=mapWidth/2;
  if(place!=undefined){
    x+=place.x;
    y+=place.y;
  }
  
  var mapCenterPointX=(x)+(offsetBase.x);
  var mapCenterPointY=(y)+(offsetBase.y);

  var offsetX = (centerPointX-mapCenterPointX);
  var offsetY = (centerPointY-mapCenterPointY);
  

  
  $('#map')[0].style.left=offsetX+'px';
  $('#map')[0].style.top=offsetY+'px';
  $('#map').html('');
}

game.map.goToPlace=(place)=>{
  alert("POI "+place._uniqueId);
}
game.map.showInfo=(place)=>{
  console.log("POI "+place._uniqueId) 
}
game.map.init=()=>{
    
  game.map.centralizeOn(game.place);

  let mapEl=$('#map').detach();
  $('#root_div_map').append(mapEl);
  dragElement(document.getElementById("map"));
  let map = SVG('map').size('100%', '100%');
  for(connection of connections){
    let rota=map.line(connection.p1.x+1000+5, connection.p1.y+1000+5, connection.p2.x+1000+5, connection.p2.y+1000+5)
    .stroke({ width: 4,dasharray:'15,15',linecap:'round'});
  }
  for(place of places){
    console.log(place);
    let mapPlace=map.rect(10,10).move((place.x+1000), (place.y+1000)).fill('#f06');
    mapPlace.mouseover(()=>{
      mapPlace.animate(100).scale(1.5);
      game.map.showInfo(place)
    });
    mapPlace.mouseout(()=>{
      mapPlace.animate(100).scale(1);
    });
    mapPlace.click(()=>{
      game.map.goToPlace(place);
    });
    $("#"+mapPlace.id()).addClass("interactable");
    place.element=mapPlace;

  }
  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      var mainWidth = $( document ).width();
      var mainHeight = $( document ).height();
      var width=$('#map').width();
      var height=$('#map').height();
  
      let left=(elmnt.offsetLeft - pos1);
      let top= (elmnt.offsetTop - pos2);
      
  
      if(
          ( top<=0 && ((height+top)>(mainHeight*0.1)))//não passar da metada
         || ( top>0 && top<(mainHeight*0.9))//não passar da metada
          
       ){
          elmnt.style.top = (top) + "px";
       }
      if(
         ( left<=0 && ((width+left)>(mainWidth*0.1)))//não passar da metada
        || ( left>0 && left<(mainWidth*0.9))//não passar da metada
         
      ){
          elmnt.style.left = (left) + "px";
      }
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}



