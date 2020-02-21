
$('#text').html('');
var p = $El('p');
p.text('You are in ');
$('#text').append(p);

beingA = new Entity({
    name:'Being A',
    resources: Resource.getAll(100,0,100,100),
    attributes: Attribute.getAll(0,0,0,0,0,0,0,0)});


function encounter(beingA,beingB){
    function continueCombat(entity,entity2){
        if(entity instanceof Entity){
            if(entity.health().value<=0)return false;
        }else{
            return false;
        }
        if(entity2 instanceof Entity){
            if(entity2.health().value<=0)return false;
        }else{
            return false;
        }
        return true;
    }
    var attacker=beingA;
    var target=beingB;
    var securityCounter=0;
    while(securityCounter<10&&continueCombat(attacker,target)){
        let damage=attacker.tackle();
        target.health().value-=damage;
        let texto = '<b>'+attacker.name+'</b> tackled <b>'+target.name+'</b> causing '+damage+' points of damage.';
        var p = $El('p');
        p.text(texto);
        $('#text').append(p);
        securityCounter++;
        var holder = attacker;
        attacker=target;
        target=holder;
    }
    let winner = target;
    let texto = winner.name+' won !';
    var p = $El('p');
    p.text(texto);
    $('#text').append(p);
}