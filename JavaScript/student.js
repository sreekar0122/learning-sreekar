class Student{
    name
    age
    hobbies
    #password
    constructor(name,age,hobbies,password){
        this.name = name
        this.age = age
        this.hobbies = hobbies
        this.#password = password
    }
    showAge(){
        alert(`this age of ${this.name} is ${this.age}`)
    }
    showPassword(){
        alert(`the priavte property password is ${this.#password}`)
    }    
}
let sreekarOb = new Student("sreekar",21,['reading','playing'],"sree")
sreekarOb.showAge()
console.log(sreekarOb)
sreekarOb.showPassword()

class FullStackStudent extends Student{
    expertise
    jobprobality
    constructor(name,age,hobbies,password,expertise,jobprobality){
        super(name,age,hobbies)
        this.expertise = expertise
        this.jobprobality = jobprobality
    }
    showJobprobality(){
        alert(`the job probality is ${this.jobprobality}`)
    }
}
let manishOb = new FullStackStudent("manish",21,["reading","playing"],"mani","Fullstack Developer","85")
manishOb.showAge()
manishOb.showPassword()
manishOb.showJobprobality()
