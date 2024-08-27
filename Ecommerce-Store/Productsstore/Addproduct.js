import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Select, MenuItem, InputLabel, FormControl, Paper, Typography } from '@mui/material';

const AddProduct = ({ productToEdit, onProductAdded }) => {
  const [product, setProduct] = useState({ name: '', price: '', availability: 'available' });

  useEffect(() => {
    if (productToEdit) {
      setProduct(productToEdit);
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productToEdit) {
      // Edit existing product
      axios.put(`/product/${product._id}`, product)
        .then(() => {
          onProductAdded();
        })
        .catch(error => console.error('Error updating product:', error));
    } else {
      // Add new product
      axios.post('/product', product)
        .then(() => {
          onProductAdded();
        })
        .catch(error => console.error('Error adding product:', error));
    }
    setProduct({ name: '', price: '', availability: '' });
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        {productToEdit ? 'Edit Product' : 'Add New Product'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          value={product.name}
          onChange={handleChange}
          label="Name"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
          label="Price"
          fullWidth
          margin="normal"
          required
        />
        <FormControl fullWidth margin="normal" required>
          <InputLabel>Availability</InputLabel>
          <Select
            name="availability"
            value={product.availability}
            onChange={handleChange}
          >
            <MenuItem value="available">Available</MenuItem>
            <MenuItem value="not available">Not Available</MenuItem>
          </Select>
        </FormControl>
        <Button 
          type="submit" 
          variant="contained" 
          color="primary"
        >
          {productToEdit ? 'Update Product' : 'Add Product'}
        </Button>
      </form>
    </Paper>
  );
};

export default AddProduct;
