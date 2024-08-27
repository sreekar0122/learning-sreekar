import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, List, ListItem, ListItemText, Paper } from '@mui/material';

const ProductSearch = () => {
  const [name, setName] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = () => {
    axios.get(`/productsearch/${name}`)
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error searching products:', error));
  };

  return (
    <Paper sx={{ p: 2 }}>
      <TextField
        label="Product Name"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
      />
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

export default ProductSearch;
