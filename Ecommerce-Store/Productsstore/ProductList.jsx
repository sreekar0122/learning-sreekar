import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const [productToEdit, setProductToEdit] = useState(null);
  const [searchName, setSearchName] = useState('');
  const [searchPrice, setSearchPrice] = useState('');
  const [searchAvailability, setSearchAvailability] = useState('available');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get('/product');
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSearchByName = async () => {
    try {
      const { data } = await axios.get(`/productsearch/${searchName}`);
      setProducts(data);
    } catch (error) {
      console.error('Error searching products by name:', error);
    }
  };

  const handleSearchByPrice = async () => {
    try {
      const { data } = await axios.get(`/productsearch/price/${searchPrice}`);
      setProducts(data);
    } catch (error) {
      console.error('Error searching products by price:', error);
    }
  };

  const handleSearchByAvailability = async () => {
    try {
      const { data } = await axios.get(`/productavailability/${searchAvailability}`);
      setProducts(data);
    } catch (error) {
      console.error('Error searching products by availability:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/product/${id}`);
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEditClick = (product) => {
    setEditingProductId(product._id);
    setProductToEdit(product);
  };

  const handleEditChange = ({ target: { name, value } }) => {
    setProductToEdit((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/product/${productToEdit._id}`, productToEdit);
      fetchProducts();
      setEditingProductId(null);
      setProductToEdit(null);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleEditCancel = () => {
    setEditingProductId(null);
    setProductToEdit(null);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Product List
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <Box sx={{ flex: 1 }}>
          <TextField
            label="Product Name"
            variant="outlined"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            size="small"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearchByName}
            sx={{ mt: 1 }}
            fullWidth
          >
            Search by Name
          </Button>
        </Box>

        <Box sx={{ flex: 1 }}>
          <TextField
            label="Minimum Price"
            type="number"
            variant="outlined"
            value={searchPrice}
            onChange={(e) => setSearchPrice(e.target.value)}
            size="small"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearchByPrice}
            sx={{ mt: 1 }}
            fullWidth
          >
            Search by Price
          </Button>
        </Box>

        <Box sx={{ flex: 1 }}>
          <FormControl size="small" variant="outlined" fullWidth>
            <InputLabel>Availability</InputLabel>
            <Select
              value={searchAvailability}
              onChange={(e) => setSearchAvailability(e.target.value)}
              label="Availability"
            >
              <MenuItem value="available">Available</MenuItem>
              <MenuItem value="not available">Not Available</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearchByAvailability}
            sx={{ mt: 1 }}
            fullWidth
          >
            Search by Availability
          </Button>
        </Box>
      </Box>

      <List>
        {products.map((product) => (
          <ListItem key={product._id} divider>
            <ListItemText
              primary={product.name}
              secondary={`Price: $${product.price} | Availability: ${product.availability}`}
            />
            <IconButton onClick={() => handleEditClick(product)} sx={{ mr: 1 }}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete(product._id)}>
              <DeleteIcon />
            </IconButton>

            {editingProductId === product._id && (
              <Paper sx={{ p: 2, mt: 2, width: '100%' }}>
                <form onSubmit={handleEditSubmit}>
                  <TextField
                    name="name"
                    value={productToEdit.name}
                    onChange={handleEditChange}
                    label="Name"
                    fullWidth
                    margin="normal"
                    required
                  />
                  <TextField
                    name="price"
                    type="number"
                    value={productToEdit.price}
                    onChange={handleEditChange}
                    label="Price"
                    fullWidth
                    margin="normal"
                    required
                  />
                  <FormControl fullWidth margin="normal" required>
                    <InputLabel>Availability</InputLabel>
                    <Select
                      name="availability"
                      value={productToEdit.availability}
                      onChange={handleEditChange}
                    >
                      <MenuItem value="available">Available</MenuItem>
                      <MenuItem value="not available">Not Available</MenuItem>
                    </Select>
                  </FormControl>
                  <Button type="submit" variant="contained" color="primary" sx={{ mr: 1 }}>
                    Save
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={handleEditCancel}>
                    Cancel
                  </Button>
                </form>
              </Paper>
            )}
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      availability: PropTypes.string.isRequired,
    })
  ),
};

export default ProductList;
