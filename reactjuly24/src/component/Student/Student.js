import { useState } from "react";
function Student(){
    let[name,SetName] = useState(" ")
    let[age,setage]=useState(" ")
    let[student,setStudent]=useState([])
    function AddName(e){
        SetName(e.target.value)
    }
    function Addage(e){
        setage(Number(e.target.value))
    }
    function Display(){
        let Profile = {
            Name:name,
            Age:age
        }
        setStudent([...student,Profile])
    }
    function DeleteDetails(indexTodelete){
        let updateStudents = student.filter(function(val,index){
            if(indexTodelete==index) return false
            return true
        })
        setStudent(updateStudents)

    }
    function Clear(){
        setStudent([])
    }
    return(
        <div className="profile">
            <h1>STUDENT'S PROFILE</h1>
            <input type="text" value={name} onChange={AddName} />
            <input type="text" value={age} onChange={Addage}/>
            <button onClick={Display}>Display</button>
            <button onClick={Clear}>ClearAll</button>
            {student.map(function(val,index){
                return <div className="result clearfix">
                    <p>Name: {val.Name}</p>
                    &nbsp;
                    <p>Age: {val.Age}</p>
                    &nbsp;
                <button onClick={function(){
                    DeleteDetails(index)
                }}>Delete</button>
                </div>
            })}
        </div>
    )
}
export default Student