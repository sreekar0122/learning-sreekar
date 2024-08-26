import TodoItem from "./TodoItem";
import Container from '@mui/material/Container';

function TodoList({ todos, DeleteTodo }) {
    return (
        <Container>
            {todos.map((val) => (
                <TodoItem 
                    key={val._id}
                    val={val}
                    DeleteTodo={DeleteTodo} 
                />
            ))}
        </Container>
    );
}

export default TodoList;
