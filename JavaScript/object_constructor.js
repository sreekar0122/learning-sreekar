function Student(name,location){
    this.name=name
    this.location=location
    this.StudentDetails = function() {
        alert("name :"+this.name +" "+"Location :"+this.location)
    }
    let password = "Asc123"
    function PrivateFunction(){
        alert("Ascendion is a Big Comapany")
    }
    this.ShowPassword = function(){
        alert(this.password)
    }
    this.runPrivate = function(){
        PrivateFunction()
    }
    return name+location
}

let returnValue = Student("swarna","proddatur")
alert(returnValue)
var StudentOne = new Student("sreekar","pdtr")
StudentOne.ShowPassword()
StudentOne.runPrivate()
StudentOne.StudentDetails()
var StudentTwo = new Student("manish","Gulbarg")
StudentTwo.StudentDetails()