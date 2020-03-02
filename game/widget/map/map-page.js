function doMap(){
    var mainWidth = $( document ).width();
    var mainHeight = $( document ).height();
    var mapWidth=$('#map').width()
    var mapHeight=$('#map').height()
    var offsetBase=$('#map').offset();
    offsetBase.y=offsetBase.top;
    offsetBase.x=offsetBase.left;
    var centerPointX=((mainWidth)/2);
    var centerPointY=((mainHeight)/2);
    var mapCenterPointX=((mapWidth)/2)+(offsetBase.x);
    var mapCenterPointY=((mapHeight)/2)+(offsetBase.y);

    var offsetX = (centerPointX-mapCenterPointX);
    var offsetY = (centerPointY-mapCenterPointY);

    $('#map')[0].style.left=offsetX+'px';
    $('#map')[0].style.top=offsetY+'px';
    $('#map').html('');
    for(place of places){
    console.log(place);
    let pointOfInterest=
    "<div class='circle hoverable' style='left:"+(place.x+1000)+"px;top:"+(place.y+1000)+"px' onclick='goToPOI("+place._uniqueId+")' ></div>";
    $('#map').append($(pointOfInterest));
    
    }
    let mapEl=$('#map').detach();
    $('#root_div_map').append(mapEl);
    dragElement(document.getElementById("map"));
}
function goToPOI(id){
  alert("POI "+id) 
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
    var width=elmnt.width;
    var height=elmnt.height;
    
    let left=(elmnt.offsetLeft - pos1);
    let top= (elmnt.offsetTop - pos2);
    
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    if(((width+left)>(mainWidth/2))){
        elmnt.style.left = (left) + "px";
    }
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
