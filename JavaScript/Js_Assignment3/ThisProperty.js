function doSomething(a, b) {
    this.propone = "test value";
}
doSomething();
document.write(window.propone);



function doSomething() {
'use strict';
    document.write(this + '<br>')
    function innerFunction() {
    document.write(this)
}
innerFunction();
}
doSomething();




let person = {
name : "John",
age : 31,
logInfo : function() {
    document.write(this.name + " is " + this.age + " years old");
}}
person.logInfo()

let add1 = {
num : 0,
calc : function() {
    document.write(this + ' ')
    this.num
    += 1;
    return this.num;
}};
document.write(add1.calc() + '<br>');
document.write(add1.calc());




let add = {
num : 0,
calc : function() {
    document.write(this + ' ')
    function innerfunc() {
        this.num += 1;
        document.write(this + ' ');
        return this.num
    } 
    return innerfunc();
}
};
document.write(add.calc() + '<br>');
document.write(add.calc());

let add2 = {
num : 0,
calc : function() {
document.write(this + ' ')
thisreference = this;
function innerfunc()
{
    thisreference.num += 1;
    document.write(thisreference + ' ');
    return thisreference.num;
    document.write(add2.calc() + '<br>');
    document.write(add2.calc());
}
    return innerfunc();
}
};



let people = function(name, age) {
    this.name = name;
    this.age = age;
    this.displayInfo = function() {
    document.write(this.name + " is " + this.age + " years old");
}
}
let person1 = new people('John', 21);
person1.displayInfo();



// Objects Method this
let user = {
    name: "John",
    age: 30
};
    user.sayHi = function() {
    alert("Hello!");
};
    user.sayHi();

// Arrow Function have No This keyword
let user1 = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};
user1.sayHi(); 


function makeUser() {
    return {
        name: "John",
        ref: this
    };
}
    let user2 = makeUser();
    alert( user2.ref.name );