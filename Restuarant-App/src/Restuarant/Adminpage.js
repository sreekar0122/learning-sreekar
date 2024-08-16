import React from 'react';
import { Container, Typography } from '@mui/material';
import RestuarantList from './RestuarantList';

const AdminPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Restaurant Admin
      </Typography>
      <RestuarantList />
      
    </Container>
  );
};

export default AdminPage;