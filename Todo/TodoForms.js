import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Container, Grid, Box, Typography } from '@mui/material';

function TodoForms({ todoEntered, changeTodo, setStatus, addTodo, descriptionEntered, changeDescription, statusEntered }) {
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4, p: 3, border: '1px solid #ddd', borderRadius: '8px' }}>
                <Typography variant="h5" gutterBottom>
                    Create New Todo
                </Typography>
                <form 
                    noValidate 
                    autoComplete="off" 
                    onSubmit={(e) => {
                        e.preventDefault();
                        addTodo();
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField 
                                label="Todo Name"
                                value={todoEntered}
                                onChange={changeTodo}
                                fullWidth
                                margin="normal"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                label="Description"
                                value={descriptionEntered}
                                onChange={changeDescription}
                                fullWidth
                                margin="normal"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth margin="normal" required>
                                <InputLabel>Status</InputLabel>
                                <Select 
                                    value={statusEntered}
                                    onChange={(e) => setStatus(e.target.value)}
                                    label="Status"
                                >
                                    <MenuItem value="completed">Completed</MenuItem>
                                    <MenuItem value="pending">Incomplete</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ textAlign: 'center', mt: 2 }}>
                                <Button 
                                    type="submit"
                                    variant="contained" 
                                    color="primary"
                                    size="large"
                                >
                                    Add Todo
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
}

export default TodoForms;
