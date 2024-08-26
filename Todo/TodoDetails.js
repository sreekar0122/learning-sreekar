import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Box, Paper } from '@mui/material';

function TodoDetails() {
    const [todoData, setTodoData] = useState({});
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

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom>
                    Todo Details
                </Typography>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        <strong>Todo ID:</strong> {todoData._id}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>Title:</strong> {todoData.name}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>Status:</strong> {todoData.status}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>Description:</strong> {todoData.description}
                    </Typography>
                </Box>
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Link to={`edit`} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary">
                            Edit Todo
                        </Button>
                    </Link>
                </Box>
            </Paper>
        </Container>
    );
}

export default TodoDetails;
