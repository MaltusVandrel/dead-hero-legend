var places=[];
var connections=[];

var baseOne = new Place({x:-230,y:-200,name:'Base 1'});
var baseTwo = new Place({x:-50,y:-290,name:'Base 2'});
places.push(baseOne);
places.push(baseTwo);

rota1 = new Connection({p1:baseOne,p2:baseTwo});
connections.push(rota1);