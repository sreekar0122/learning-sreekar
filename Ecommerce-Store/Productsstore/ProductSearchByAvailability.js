import React, { useState } from 'react';
import axios from 'axios';
import { TextField, MenuItem, Button, List, ListItem, ListItemText, Paper } from '@mui/material';

const ProductSearchByAvailability = () => {
  const [availability, setAvailability] = useState('available');
  const [products, setProducts] = useState([]);

  const handleSearch = () => {
    axios.get(`/productavailability/${availability}`)
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error searching products by availability:', error));
  };

  return (
    <Paper sx={{ p: 2 }}>
      <TextField
        label="Availability"
        select
        variant="outlined"
        fullWidth
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
        margin="normal"
      >
        <MenuItem value="available">Available</MenuItem>
        <MenuItem value="not available">Not Available</MenuItem>
      </TextField>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSearch}
      >
        Search
      </Button>
      <List>
        {products.map(product => (
          <ListItem key={product._id} divider>
            <ListItemText
              primary={product.name}
              secondary={`Price: $${product.price} | Availability: ${product.availability}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ProductSearchByAvailability;
