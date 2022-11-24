function sum(x,y){
    return x + y;
}

function convertToArray(x,y,z,r){
    return [x,y,z,r]
}


function add(){
    if(arguments.length == 0 ){
        return 0 
    }else if(arguments.length > 0  ) {
        var result = 0
        for(var i = 0; i < arguments.length; i++){
            if(isFinite(arguments[i])){
                result+=arguments[i]
            }else{
                var err = new TypeError(" add function expect only numbers")
                throw err;
            }
        }
         return result
    }
}



module.exports = {
    sum, convertToArray, add
}