import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Container, Box, Paper, Typography } from '@mui/material';

function TodoDetailsEdit() {
    const [todoData, setTodoData] = useState({});
    const options = ["Completed", "Incomplete"];
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/api/todos/${id}`)
            .then(response => {
                setTodoData(response.data);
            })
            .catch(error => {
                console.error("Error fetching todo data:", error);
            });
    }, [id]);

    const editTodo = (e) => {
        e.preventDefault();
        const todoModifiedOb = {
            name: e.target.todoitem.value,
            status: e.target.status.value,
            description: e.target.description.value 
        };
        axios.put(`/api/todos/${id}`, todoModifiedOb)
            .then(response => {
                console.log("Todo updated successfully:", response.data);
            })
            .catch(error => {
                console.error("Error updating todo:", error);
            });
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom>
                    Edit Todo
                </Typography>
                <form onSubmit={editTodo}>
                    <Box sx={{ mb: 2 }}>
                        <TextField 
                            label="Todo Name"
                            name="todoitem"
                            value={todoData.name || ''}
                            onChange={(e) => setTodoData({ ...todoData, name: e.target.value })}
                            fullWidth
                            margin="normal"
                            required
                        />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel>Status</InputLabel>
                            <Select 
                                name="status"
                                value={todoData.status || ''}
                                onChange={(e) => setTodoData({ ...todoData, status: e.target.value })}
                                label="Status"
                            >
                                {options.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField 
                            label="Description"
                            name="description"
                            value={todoData.description || ''} 
                            onChange={(e) => setTodoData({ ...todoData, description: e.target.value })}
                            fullWidth
                            margin="normal"
                            required
                        />
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Button type="submit" variant="contained" color="primary">
                            Edit Todo
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Container>
    );
}

export default TodoDetailsEdit;
