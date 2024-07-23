import { useState } from "react";
function Calculate(){
    let[num1, setnum1] = useState(' ')
    let[num2,setnum2] = useState(' ')
    let[sum,setSum] = useState(0)
    function FirstValue(e){
        (setnum1(Number(e.target.value)))
    }
    function Secondvalue(e){
        (setnum2(Number(e.target.value)))

    }
    function calc(){ 
        setSum(num1+num2)
    }
    return(
        <div className="box">
            <h1>SUM CALCULATOR</h1>
            <input type="number" value={num1} onChange={FirstValue}/>
            <input type="number" value={num2} onChange={Secondvalue}/>
            <button onClick={calc}>Calculate</button>
            <p>Result: {sum}</p>
        </div>
    )
}
export default Calculate