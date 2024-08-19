import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Container, Typography, Paper, Box } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define the validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .required('Category name is required')
    .min(3, 'Category name must be at least 3 characters')
    .max(50, 'Category name must be at most 50 characters'),
  description: Yup.string()
    .required('Description is required')
    .min(10, 'Description must be at least 10 characters')
    .max(500, 'Description must be at most 500 characters'),
});

function AddCategory() {
  const [initialValues] = useState({ name: '', description: '' });
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post('http://localhost:3000/api/v1/categories', values);
      alert("Category Added Successfully");
      resetForm();
      navigate("/admin");
    } catch (err) {
      alert("An error occurred: " + (err.message || "Unable to add the category."));
      console.error(err);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: 16 }}>
        <Typography variant="h5" gutterBottom>
          Add New Category
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Box display="flex" flexDirection="column" gap={2}>
                <Field
                  name="name"
                  as={TextField}
                  label="Category Name"
                  variant="outlined"
                  fullWidth
                  error={touched.name && Boolean(errors.name)}
                  helperText={<ErrorMessage name="name" />}
                />
                <Field
                  name="description"
                  as={TextField}
                  label="Description"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  error={touched.description && Boolean(errors.description)}
                  helperText={<ErrorMessage name="description" />}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Add Category
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
}

export default AddCategory;
