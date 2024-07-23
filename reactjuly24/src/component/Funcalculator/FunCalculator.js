import { useState } from "react";
function FunCalculator(){
    let pi = 3.14
    let[value,setValue] = useState(" ")
    let[Sum,setSum] = useState(0)
    function AngleFunc(e){
        setValue(Number(e.target.value))
    }
    function sinF(){
        setSum(Math.sin(value*(Math.PI/180)).toFixed(5))
    }
    function cosF(){
        setSum(Math.cos(value*(Math.PI/180)).toFixed(5))
    }
    function tanF(){
        if(value%90 == 0){
            setSum("Infinity")
        }else{
        setSum(Math.tan(value*(Math.PI/180)).toFixed(5))
        }
    }
    return(
        <div className="FunCal">
        <h1>DEGREE CALCULATOR</h1>
        <input type="number" value={value} onChange={AngleFunc}/>
        <button onClick={sinF}>sin</button>
        <button onClick={cosF}>cos</button>
        <button onClick={tanF}>tan</button>
        <p>Solution: {Sum}</p>
        </div>
    )
}
export default FunCalculator