import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Todo } from './interfaces/Todo';
import './Todo.css';

const TodoComponent: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoName, setNewTodoName] = useState('');
  const [newTodoStatus, setNewTodoStatus] = useState<string>('incomplete');

  useEffect(() => {
    axios.get('http://localhost:3001/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);

  const addTodo = () => {
    const newTodo: Todo = { name: newTodoName, status: newTodoStatus };
    axios.post('http://localhost:3001/todos', newTodo)
      .then(() => {
        setTodos([...todos, newTodo]);
        setNewTodoName('');
        setNewTodoStatus('incomplete');
      })
      .catch(error => console.error(error));
  };

  const deleteTodo = (index: number) => {
    axios.delete(`http://localhost:3001/todos/${index}`)
      .then(() => {
        setTodos(todos.filter((_, i) => i !== index));
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">Todo List</h2>

      <div className="todo-inputs">
        <input
          type="text"
          placeholder="New Todo"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
          className="todo-input"
        />
        <select
          value={newTodoStatus}
          onChange={(e) => setNewTodoStatus(e.target.value)}
          className="todo-select"
        >
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <button onClick={addTodo} className="todo-button">Add Todo</button>
      </div>

      <table className="todo-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.name}</td>
              <td className={todo.status}>
                {todo.status === 'complete' ? 'Complete' : 'Incomplete'}
              </td>
              <td>
                <button onClick={() => deleteTodo(index)} className="todo-delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoComponent;
