import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { v4 as uuidv4 } from 'uuid';
import { TextField, Button, MenuItem, Container, Typography, Paper, Box } from "@mui/material";

// Define the validation schema using Yup
const validationSchema = Yup.object({
  code: Yup.string().required("Product Code is required"),
  name: Yup.string().required("Product Name is required"),
  excerpt: Yup.string().required("Excerpt is required"),
  category: Yup.string().required("Category is required"),
  price: Yup.number().required("Price is required").positive("Price must be positive"),
});

function AddProducts() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/categories")
      .then(response => {
        setCategories(response.data.categories); 
      })
      .catch(error => {
        console.error(error);
      });
  }, []); 

  const handleSubmit = (values, { resetForm }) => {
    axios
      .post("http://localhost:3000/api/v1/products", values)
      .then(response => {
        alert("Product successfully added!");
        navigate('/home/showproducts');
        resetForm(); 
      })
      .catch(err => {
        console.error(err);
        alert("Failed to add product. Please try again.");
      });
  };

  const generateUniqueCode = () => {
    return uuidv4().slice(0, 6).toUpperCase();
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: 16 }}>
        <Typography variant="h5" gutterBottom>
          Add New Product
        </Typography>
        <Formik
          initialValues={{ code: "", name: "", excerpt: "", category: "", price: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <Box display="flex" flexDirection="column" gap={2}>
                <Field
                  name="code"
                  as={TextField}
                  label="Product Code"
                  variant="outlined"
                  fullWidth
                  error={Boolean(ErrorMessage.name)}
                  helperText={<ErrorMessage name="code" />}
                />
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  onClick={() => setFieldValue('code', generateUniqueCode())}
                >
                  Generate Unique Code
                </Button>

                <Field
                  name="name"
                  as={TextField}
                  label="Product Name"
                  variant="outlined"
                  fullWidth
                  error={Boolean(ErrorMessage.name)}
                  helperText={<ErrorMessage name="name" />}
                />

                <Field
                  name="excerpt"
                  as={TextField}
                  label="Excerpt"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  error={Boolean(ErrorMessage.excerpt)}
                  helperText={<ErrorMessage name="excerpt" />}
                />

                <Field
                  name="category"
                  as={TextField}
                  label="Category"
                  select
                  variant="outlined"
                  fullWidth
                  error={Boolean(ErrorMessage.category)}
                  helperText={<ErrorMessage name="category" />}
                >
                  <MenuItem value="">
                    <em>Select Category</em>
                  </MenuItem>
                  {categories.map(category => (
                    <MenuItem key={category._id} value={category._id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Field>

                <Field
                  name="price"
                  as={TextField}
                  label="Price"
                  type="number"
                  variant="outlined"
                  fullWidth
                  error={Boolean(ErrorMessage.price)}
                  helperText={<ErrorMessage name="price" />}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
}

export default AddProducts;
