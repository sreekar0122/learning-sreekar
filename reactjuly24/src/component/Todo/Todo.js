import { useState } from "react";

function Todo(){
    let InitialTodo = ["cook","gym","Reading","Eat"]
    let [todos,setTodos] = useState(InitialTodo)
    let[todoEntered,setTodoEntered] = useState("Enter a Hobby")
    function changeTodo(e){
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
        setTodoEntered(e.target.value)
    }
    function addTodo(){
        let newTodoArr = [...todos,todoEntered]
        setTodos(newTodoArr)
    }
    function DeleteTodo(indexTodelete){
        let UpdateTodos = todos.filter(function(val,index){
            if(indexTodelete==index)return false;
            return true;
        })
        setTodos(UpdateTodos)
    }
    function clearTodo(){
        let clearArr = []
        setTodos(clearArr)
    }
    return(
        <div className="list">
            <h1>
                TODO LIST
            </h1>
            <input type = "text" name="todoitem" value={todoEntered} onChange={changeTodo}/>
            <button onClick={addTodo}>Add Hobby</button>
            <button onClick = {clearTodo}>Clear ALL</button>
            {todos.map(function(val,index){
                return <div>{val}
                <button onClick={function(){
                    DeleteTodo(index)
                }}>Delete</button>
                </div>
            })}
            
        </div>
    )
}
export default Todo