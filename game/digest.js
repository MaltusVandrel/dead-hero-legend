function dataBind(root){
    if(root==undefined){
        root="";
    }
    $(root+" [data-if]").each((index,element)=>{
        var test;
        try{
            test=$(element).data("if");
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
        }catch(e){
            console.error(e,"path:"+test);
            $(element).hide();
        }
    });
    $(root+" [data-bind]").each((index,element)=>{
        var dataPath;
        try{
           dataPath=$(element).data("bind");
        $(element).html(eval(dataPath));
        }catch(e){
            console.error(e,"path:"+dataPath);
        }
            
    });
    $(root+" [data-bind-value]").each((index,element)=>{        
        var dataPath;
        try{
           dataPath=$(element).data("bind-value");
           $(element).val(eval(dataPath));
        }catch(e){
            console.error(e,"path:"+dataPath);
        }
    });
    
    
}