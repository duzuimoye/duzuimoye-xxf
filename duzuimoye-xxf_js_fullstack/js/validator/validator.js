const strategies = {
    isNonEmpty:function(value,errorMsg){
        if(value.trim()===''){
            return errorMsg
        }

    },
    Length:function(value,minlen,maxlen,errorMsg){
        if(value.trim().length<minlen || value.trim().length>maxlen){
            return errorMsg
        }

    },
    isMobilePhone:function(value,errorMsg){
        if(!/1[3456789][0-9]{9}/.test(value)){
            return errorMsg
        }
    },
    isEmail:function(){

    }
}