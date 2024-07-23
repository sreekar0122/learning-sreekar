// let studentob = new Object()
// studentob.name = "sreekar"
// studentob.age = 21
// studentob.hobbies = ["cricket","music"]
// studentob.sreekarSecret = function(){
//     alert("sreekar will sleep more time")
// }
// alert(studentob.name)
// alert(studentob.age)
// studentob.sreekarSecret();
let arr = [
    {
        "name": "Sreekar",
        "age": 21,
        "gender": "Male"
    },
    {
        "name": "Priyanka",
        "age": 20,
        "gender": "Female"
    }
]
let amap = arr.map( function(name){
    return arr.name
})
console.log(amap)
