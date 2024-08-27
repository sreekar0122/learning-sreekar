// component/Navbar/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom'; // if you're using react-router for navigation

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ecommerce Dashboard
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/products">Products</Button>
          <Button color="inherit" component={Link} to="/add-product">Add Product</Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
