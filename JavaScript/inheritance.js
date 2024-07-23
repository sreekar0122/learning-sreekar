function Gods(age,strength){
    this.age = age
    this.strength = strength
    this.displayStrength = function(){
        alert("The strength is extremely High")
    }
}
let SomeGodOb = new Gods("Huge","extremely High")
function Hero(name,location){
    this.name=name
    this.location=location
    this.sayName = function() {
        alert("name :"+this.name +" "+"Location :"+this.location)
    }
}
Hero.prototype = SomeGodOb
//resetting the constructor function
Hero.prototype.constructor = Hero
let supermanOb = new Hero("Super Man","Krypton")
supermanOb.displayStrength()
console.log(supermanOb)
console.log(supermanOb.constructor)
