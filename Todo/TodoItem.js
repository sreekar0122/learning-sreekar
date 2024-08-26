import { Button, Typography, Container, Box } from '@mui/material';
import { Link } from "react-router-dom";

function TodoItem({ val, DeleteTodo }) {
    return (
        <Container maxWidth="sm" sx={{ my: 2, p: 2, border: '1px solid #ddd', borderRadius: '8px' }}>
            <Box sx={{ mb: 2 }}>
                <Typography variant="h6" gutterBottom>
                    {val.name}
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Description:</strong> {val.description}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button 
                    variant="contained" 
                    color="error"
                    onClick={() => DeleteTodo(val._id)}
                >
                    Delete
                </Button>
                <Link to={`${val._id}`} style={{ textDecoration: 'none' }}>
                    <Button 
                        variant="contained" 
                        color="primary"
                    >
                        View Todo
                    </Button>
                </Link>
            </Box>
        </Container>
    );
}

export default TodoItem;
