import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { TextField, Button, Box, IconButton, Typography, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Home = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedRows, setSelectedRows] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/categories')
            .then((response) => {
                setCategories(response.data.categories);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/v1/categories/${id}`);
            setCategories(categories.filter((category) => category._id !== id));
        } catch (err) {
            setError(err.message || 'An error occurred while deleting the category.');
        }
    };

    const handleBulkDelete = async () => {
        try {
            await Promise.all(selectedRows.map(id => axios.delete(`http://localhost:3000/api/v1/categories/${id}`)));
            setCategories(categories.filter(category => !selectedRows.includes(category._id)));
            setSelectedRows([]);
        } catch (err) {
            setError(err.message || 'An error occurred while deleting the categories.');
        }
    };

    const handleRowSelected = (state) => {
        setSelectedRows(state.selectedRows.map(row => row._id));
    };

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        // {
        //     name: 'Description',
        //     selector: row => row.description,
        // },
        {
            cell: row => (
                <Box display="flex" justifyContent="center">
                    <IconButton onClick={() => navigate(`/edit-category/${row._id}`)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(row._id)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    const filteredCategories = categories.filter(category => 
        category.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (loading) return <Typography variant="h6">Loading...</Typography>;
    if (error) return <Typography color="error">Error: {error}</Typography>;

    return (
        <Paper elevation={3} style={{ padding: '16px', margin: '16px' }}>
            <Typography variant="h4" gutterBottom>
                Category List
            </Typography>
            <Box display="flex" justifyContent="space-between" mb={2}>
                <TextField
                    label="Search"
                    variant="outlined"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    size="small"
                />
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleBulkDelete}
                    disabled={selectedRows.length === 0}
                >
                    Delete Selected
                </Button>
            </Box>
            <DataTable
                columns={columns}
                data={filteredCategories}
                pagination
                selectableRows
                onSelectedRowsChange={handleRowSelected}
                expandableRows
                expandableRowsComponent={ExpandableComponent}
                paginationPerPage={10}
            />
        </Paper>
    );
};

// Define the expandable row component with Material-UI
const ExpandableComponent = ({ data }) => (
    <Box p={2} bgcolor="background.paper">
        <Typography variant="h6">More Information:</Typography>
        <Typography variant="body1">{data.description}</Typography>
    </Box>
);

export default Home;
