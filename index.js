
function receivesAFunction(callback){
    return callback(function(){});
}

receivesAFunction(function(){});

function returnsANamedFunction(){
    return function name(){{}};
}

function returnsAnAnonymousFunction(){
    return function(){
        return "something"
    }
}