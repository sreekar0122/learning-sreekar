import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Box, Switch, FormControlLabel, Typography, Container } from '@mui/material';
import axios from 'axios';

const RestaurantForm = ({ initialValues, onSubmit, editMode }) => {
  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Username must be at least 3 characters')
    .max(20, 'Username cannot exceed 20 characters')
    .required('Restaurant name is required'),
    email: Yup.string().email('Invalid email address')
    .matches(/@/, 'Email must be a Gmail address')
    .required('Email is required'),
    status: Yup.boolean().required('Status is required'),
  });

  const handleSubmit = async (values) => {
    try {
      if (editMode) {
        await axios.put(`http://localhost:1337/api/Restuarants/${initialValues.id}`, { data: values });
      } else {
        await axios.post('http://localhost:1337/api/Restuarants', { data: values });
      }
      onSubmit();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form>
            <Box mb={3}>
              <Typography variant="h6" gutterBottom>
                {editMode ? 'Edit Restaurant' : 'Add New Restaurant'}
              </Typography>
            </Box>
            <Box mb={2}>
              <Field
                name="name"
                as={TextField}
                label="Restaurant Name"
                fullWidth
                variant="outlined"
                error={touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <Box mb={2}>
              <Field
                name="email"
                as={TextField}
                label="Email"
                fullWidth
                variant="outlined"
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <Box mb={2}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.status}
                    onChange={(e) => setFieldValue('status', e.target.checked)}
                    color="primary"
                  />
                }
                label="Status"
              />
            </Box>
            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                {editMode ? 'Update Restaurant' : 'Add Restaurant'}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RestaurantForm;
