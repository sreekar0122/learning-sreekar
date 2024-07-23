let ob ={
    name:"sreekar",
    location:"pdtr"
}
// its like inheriting the object 
let studentOb = Object.create(ob)
studentOb.course = "Fullstack"
studentOb.showCompany = function(){
    alert("Its Ascendion")
}
alert(studentOb.location)
studentOb.showCompany();