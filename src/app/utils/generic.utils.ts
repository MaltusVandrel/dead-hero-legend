
export class GenericUtils{

    private constructor(){}

    static isNull(object:any):boolean{
        if(object==undefined||object==null)return true;
        return false;
    }
    static isNotNull(object:any):boolean{
       return !this.isNull(object);
    }
    static isEmpty(object:String):boolean{
        if(this.isNull(object))return true;
        if(object.trim()==" "||object.trim()=="")return true;
        return false;
    }
    static isNotEmpty(object:String):boolean{
        return !this.isNotEmpty(object);
    }
}