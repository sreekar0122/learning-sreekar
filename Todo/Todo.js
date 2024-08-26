import { useEffect, useState } from "react";
import axios from "axios";
import TodoForms from "./TodoForms";
import TodoList from "./TodoList";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Todo() {
    const InitialTodo = [{ name: "default name", status: "default status", description: "default description" }];
    const [todos, setTodos] = useState(InitialTodo);
    const [todoEntered, setTodoEntered] = useState("Enter a Hobby");
    const [statusEntered, setStatus] = useState("completed");
    const [descriptionEntered, setDescriptionEntered] = useState("Enter a description");

    useEffect(() => {
        getTodos();
    }, []);

    const changeTodo = (e) => {
        setTodoEntered(e.target.value);
    };

    const changeDescription = (e) => {
        setDescriptionEntered(e.target.value); 
    };

    const addTodo = () => {
        const newTodo = {
            name: todoEntered,
            status: statusEntered,
            description: descriptionEntered 
        };
        axios.post("/api/todos", newTodo)
            .then(response => {
                getTodos(); 
            })
            .catch(error => {
                console.log(error);
            });
    };

    const DeleteTodo = (id) => {
        axios.delete(`/api/todos/${id}`)
            .then(response => {
                getTodos(); 
            })
            .catch(error => {
                console.log(error);
            });
    };

    const getTodos = async () => {
        try {
            const response = await axios.get("/api/todos");
            setTodos(response.data); 
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Todo List
            </Typography>
            <TodoForms 
                todoEntered={todoEntered}
                changeTodo={changeTodo}
                descriptionEntered={descriptionEntered} 
                changeDescription={changeDescription}
                setStatus={setStatus}
                addTodo={addTodo}
            />
            <TodoList todos={todos} DeleteTodo={DeleteTodo} />
        </Container>
    );
}

export default Todo;
