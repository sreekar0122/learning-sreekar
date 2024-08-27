import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, List, ListItem, ListItemText, Paper } from '@mui/material';

const ProductSearchByPrice = () => {
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = () => {
    axios.get(`/productsearch/price/${price}`)
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error searching products by price:', error));
  };

  return (
    <Paper sx={{ p: 2 }}>
      <TextField
        label="Minimum Price"
        type="number"
        variant="outlined"
        fullWidth
        value={price}
        onChange={(e) => setPrice(e.target.value)}
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

export default ProductSearchByPrice;
