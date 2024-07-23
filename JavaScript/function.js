// let sum = new Function('a', 'b', 'return a + b');
// console.log(sum(5, 10)); // logs 15 to the console

// function invokeSum(a, b) {
//     return a() + b();
// }
// function returnOne() {
//     return 1;
// }
// function returnTwo() {
//     return 2;
// }
// alert(invokeSum(returnOne, returnTwo)); // logs 3 to the console
//-----------------------------------------------------------------------------
//immediate function
// (
//     function(name,location) {
//         alert("Hello name is " + name + " and location is " + location);
//     }
// )("sreekar","pdtr")
//-------------------------------------------------------------------------------
//Inner Function
// function outerFunction(name) {
//     function innerFunction(location) {
//         return location;
//     }
//     return "my name is " + name + " and my location is " + innerFunction("pdtr");
// }
// console.log(outerFunction("sreekar"))
//--------------------------------------------------------------------------------
//Function returning function
function outerFunction() {
    alert("Hello name is sreekar");
    return function innerFunction() {
        alert(" and my location is pdtr");
    }
}
var newFunction = outerFunction();