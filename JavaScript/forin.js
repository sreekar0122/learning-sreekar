let courseMern = new Object()
courseMern.duration = "2 months"
courseMern.location = "Bengaluru"
courseMern.faculty = "Sumit"
courseMern.studentNo = 12
for(let index in courseMern){
    //index we can get the property 
    //by using it with the object in square brackets we can get the value 
    //why square brackets is like index is a variable so we need to put in square brackets to call with object
    alert(index)
    alert(courseMern[index])
}