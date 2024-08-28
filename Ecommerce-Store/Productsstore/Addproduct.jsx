import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Paper,
  Typography,
} from '@mui/material';

const AddProduct = ({ productToEdit, onProductAdded }) => {
  const [product, setProduct] = useState({ name: '', price: '', availability: 'available' });

  useEffect(() => {
    if (productToEdit) {
      setProduct(productToEdit);
    }
  }, [productToEdit]);

  const handleChange = ({ target: { name, value } }) => {
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (productToEdit) {
        await axios.put(`/product/${product._id}`, product);
      } else {
        await axios.post('/product', product);
      }
      onProductAdded();
      setProduct({ name: '', price: '', availability: 'available' });
    } catch (error) {
      console.error(`Error ${productToEdit ? 'updating' : 'adding'} product:`, error);
    }
  };

  const { name, price, availability } = product;

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        {productToEdit ? 'Edit Product' : 'Add New Product'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          value={name}
          onChange={handleChange}
          label="Name"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="price"
          type="number"
          value={price}
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
            value={availability}
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

AddProduct.propTypes = {
  productToEdit: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    availability: PropTypes.string,
  }),
  onProductAdded: PropTypes.func.isRequired,
};

AddProduct.defaultProps = {
  productToEdit: null,
};

export default AddProduct;
