class Attribute extends baseModel{
    value=0;
    code;
    constructor(value,code){
        super();
        this.value=value;
        this.code=code;
    }
}
function _doAttrFunc(code){
    return (inVal)=>{
        return new Attribute(inVal,code);
    }
}
Attribute.STR=_doAttrFunc(Code.Attribute.STR);
Attribute.DEX=_doAttrFunc(Code.Attribute.DEX);
Attribute.CON=_doAttrFunc(Code.Attribute.CON);
Attribute.INT=_doAttrFunc(Code.Attribute.INT);
Attribute.WIS=_doAttrFunc(Code.Attribute.WIS);
Attribute.CHA=_doAttrFunc(Code.Attribute.CHA);
Attribute.WIL=_doAttrFunc(Code.Attribute.WIL);
Attribute.LUK=_doAttrFunc(Code.Attribute.LUK);
Attribute.getAll=(str,dex,con,int,wis,cha,wil,luk)=>{
    var attrs=[];
        attrs.push(Attribute.STR(dex));
        attrs.push(Attribute.DEX(str));
        attrs.push(Attribute.CON(con));
        attrs.push(Attribute.INT(int));
        attrs.push(Attribute.WIS(wis));
        attrs.push(Attribute.CHA(cha));
        attrs.push(Attribute.WIL(wil));
        attrs.push(Attribute.LUK(luk));
    return attrs;
}
