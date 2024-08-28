function outerFunction(param){
    var privatevar = 5;
    var innerFunction = function(input){
        alert(param + " " + privatevar);
        var sum = privatevar +input+param;
        alert(sum);
    }
    return innerFunction;
}
var closureFunction = outerFunction(12);
closureFunction(15);