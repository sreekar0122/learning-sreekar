import React, { useState, useEffect } from 'react';
import { Button, List, ListItem, ListItemText, Box, Typography, Paper, Divider } from '@mui/material';
import axios from 'axios';
import RestuarantForm from './RestuarantForm';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/Restuarants'); // Corrected endpoint
      setRestaurants(response.data.data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:1337/api/Restuarants/${id}`); // Corrected endpoint
      fetchRestaurants();
      setSelectedRestaurant(null); 
    } catch (error) {
      console.error('Error deleting restaurant:', error);
    }
  };

  const handleDetails = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleFormSubmit = () => {
    setIsEditing(false);
    setSelectedRestaurant(null);
    fetchRestaurants();
  };

  return (
    <Box p={3}>
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
        <RestuarantForm
          initialValues={{ name: '', email: '', status: false }}
          onSubmit={handleFormSubmit}
          editMode={false}
        />
      </Paper>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h6" gutterBottom>
          Restaurant List
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <List>
          {restaurants.map((restaurant) => (
            <ListItem key={restaurant.id} divider>
              <ListItemText primary={restaurant.attributes.name} />
              <Button
                variant="outlined"
                color="primary"
                sx={{ marginRight: 1 }}
                onClick={() => handleDetails(restaurant)}
              >
                Details
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleDelete(restaurant.id)}
              >
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      </Paper>
      {selectedRestaurant && (
        <Box mt={4} p={3} border={1} borderColor="grey.300" borderRadius={2}>
          {!isEditing ? (
            <Paper elevation={2} sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Restaurant Details
              </Typography>
              <Typography><strong>Name:</strong> {selectedRestaurant.attributes.name}</Typography>
              <Typography><strong>Email:</strong> {selectedRestaurant.attributes.email}</Typography>
              <Typography><strong>Status:</strong> {selectedRestaurant.attributes.status ? 'Active' : 'Inactive'}</Typography>
              <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={handleEditClick}>
                Edit
              </Button>
            </Paper>
          ) : (
            <RestuarantForm
              initialValues={{
                id: selectedRestaurant.id,
                name: selectedRestaurant.attributes.name,
                email: selectedRestaurant.attributes.email,
                status: selectedRestaurant.attributes.status,
              }}
              onSubmit={handleFormSubmit}
              editMode={true}
            />
          )}
        </Box>
      )}
    </Box>
  );
};

export default RestaurantList;
