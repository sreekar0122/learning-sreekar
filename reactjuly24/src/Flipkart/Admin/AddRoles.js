import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Paper, Box, FormControl, FormControlLabel, Checkbox, FormHelperText } from '@mui/material';

// Define the validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Role Name is required"),
  status: Yup.boolean().required("Status is required")
});

const RoleForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/roles', values);
      console.log('Role added:', response.data);
      alert("Role is Added");
      resetForm();
      // Optionally navigate to another route
      // navigate('/AddUsers');
    } catch (error) {
      console.error('Error adding role:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: 16 }}>
        <Typography variant="h5" gutterBottom>
          Add New Role
        </Typography>
        <Formik
          initialValues={{ name: '', status: true }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form>
              <Box display="flex" flexDirection="column" gap={2}>
                <Field
                  name="name"
                  as={TextField}
                  label="Role Name"
                  variant="outlined"
                  fullWidth
                  error={Boolean(<ErrorMessage name="name" />)}
                  helperText={<ErrorMessage name="name" />}
                />

                <FormControl component="fieldset" error={Boolean(<ErrorMessage name="status" />)}>
                  <FormControlLabel
                    control={
                      <Field
                        name="status"
                        type="checkbox"
                        as={Checkbox}
                        checked={values.status}
                        onChange={() => setFieldValue('status', !values.status)}
                      />
                    }
                    label={values.status ? 'Active' : 'Inactive'}
                  />
                  <FormHelperText>
                    <ErrorMessage name="status" />
                  </FormHelperText>
                </FormControl>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Add Role"}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default RoleForm;
